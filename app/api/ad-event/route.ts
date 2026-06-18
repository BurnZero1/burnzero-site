import {
  parseAdEventPayload,
  toPostHogEventName,
  type AdEventPayload,
} from "@/lib/ad-analytics";

async function forwardToPostHog(payload: AdEventPayload) {
  const apiKey = process.env.POSTHOG_PROJECT_API_KEY;
  if (!apiKey) return;

  const host = process.env.POSTHOG_HOST ?? "https://us.i.posthog.com";

  await fetch(`${host}/capture/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_key: apiKey,
      event: toPostHogEventName(payload.event),
      distinct_id: payload.sessionId,
      timestamp: payload.timestamp ?? new Date().toISOString(),
      properties: {
        unit: payload.unit,
        source: "fleetmagic_iframe",
        ...payload.properties,
      },
    }),
  });
}

async function forwardToWebhook(payload: AdEventPayload) {
  const webhookUrl = process.env.AD_EVENT_WEBHOOK_URL;
  if (!webhookUrl) return;

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const payload = parseAdEventPayload(body);
  if (!payload) {
    return Response.json({ error: "Invalid ad event payload." }, { status: 400 });
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[ad-event]", JSON.stringify(payload));
  }

  await Promise.allSettled([
    forwardToPostHog(payload),
    forwardToWebhook(payload),
  ]);

  return new Response(null, { status: 204 });
}
