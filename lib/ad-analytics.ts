export const AD_UNITS = [
  "leaderboard-728x90",
  "sidebar-300x250",
  "sidebar-300x250-simple",
] as const;

export const AD_EVENTS = [
  "impression",
  "click",
  "page_view",
  "engagement",
  "session_end",
] as const;

export type AdUnit = (typeof AD_UNITS)[number];
export type AdEventName = (typeof AD_EVENTS)[number];

export type AdEventPayload = {
  event: AdEventName;
  unit: AdUnit;
  sessionId: string;
  timestamp?: string;
  properties?: Record<string, unknown>;
};

export function isAdUnit(value: unknown): value is AdUnit {
  return typeof value === "string" && AD_UNITS.includes(value as AdUnit);
}

export function isAdEventName(value: unknown): value is AdEventName {
  return typeof value === "string" && AD_EVENTS.includes(value as AdEventName);
}

export function parseAdEventPayload(body: unknown): AdEventPayload | null {
  if (!body || typeof body !== "object") return null;

  const record = body as Record<string, unknown>;
  const event = record.event;
  const unit = record.unit;
  const sessionId = record.sessionId;

  if (!isAdEventName(event) || !isAdUnit(unit) || typeof sessionId !== "string") {
    return null;
  }

  if (sessionId.length < 8 || sessionId.length > 64) return null;

  const properties =
    record.properties && typeof record.properties === "object"
      ? (record.properties as Record<string, unknown>)
      : undefined;

  const timestamp =
    typeof record.timestamp === "string" ? record.timestamp : undefined;

  return { event, unit, sessionId, timestamp, properties };
}

export function toPostHogEventName(event: AdEventName) {
  return `ad_${event}`;
}
