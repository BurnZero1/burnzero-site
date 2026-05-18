const RECIPIENT_EMAIL = "chamorro@burn-zero.com";

type DemoRequestBody = {
  name?: unknown;
  company?: unknown;
  message?: unknown;
};

function cleanField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asPlainText(name: string, company: string, message: string) {
  return [
    "New Burn Zero demo request",
    "",
    `Name: ${name}`,
    `Company: ${company}`,
    "",
    "Message:",
    message,
  ].join("\n");
}

function asHtml(name: string, company: string, message: string) {
  const escapeHtml = (value: string) =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  return `
    <h1>New Burn Zero demo request</h1>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;
}

export async function POST(request: Request) {
  let body: DemoRequestBody;

  try {
    body = (await request.json()) as DemoRequestBody;
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }

  const name = cleanField(body.name);
  const company = cleanField(body.company);
  const message = cleanField(body.message);

  if (!name || !company || !message) {
    return Response.json(
      { message: "Name, company, and message are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "Burn Zero <onboarding@resend.dev>";

  if (!apiKey) {
    return Response.json(
      {
        message:
          "Email is not configured yet. Add RESEND_API_KEY to enable demo requests.",
      },
      { status: 503 }
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: RECIPIENT_EMAIL,
      subject: `Burn Zero demo request from ${name}`,
      text: asPlainText(name, company, message),
      html: asHtml(name, company, message),
    }),
  });

  if (!response.ok) {
    return Response.json(
      { message: "Email could not be sent. Please try again." },
      { status: 502 }
    );
  }

  return Response.json({ message: "Demo request sent." });
}
