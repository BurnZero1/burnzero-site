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
    "Nueva solicitud de demo de Burn Zero",
    "",
    `Nombre: ${name}`,
    `Empresa: ${company}`,
    "",
    "Mensaje:",
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
    <h1>Nueva solicitud de demo de Burn Zero</h1>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
  `;
}

export async function POST(request: Request) {
  let body: DemoRequestBody;

  try {
    body = (await request.json()) as DemoRequestBody;
  } catch {
    return Response.json({ message: "Solicitud no válida." }, { status: 400 });
  }

  const name = cleanField(body.name);
  const company = cleanField(body.company);
  const message = cleanField(body.message);

  if (!name || !company || !message) {
    return Response.json(
      { message: "Nombre, empresa y mensaje son obligatorios." },
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
          "El correo todavía no está configurado. Agrega RESEND_API_KEY para habilitar las solicitudes de demo.",
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
      subject: `Solicitud de demo de Burn Zero de ${name}`,
      text: asPlainText(name, company, message),
      html: asHtml(name, company, message),
    }),
  });

  if (!response.ok) {
    return Response.json(
      { message: "No se pudo enviar el correo. Inténtalo de nuevo." },
      { status: 502 }
    );
  }

  return Response.json({ message: "Solicitud de demo enviada." });
}
