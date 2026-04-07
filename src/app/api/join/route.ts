import { google } from "googleapis";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Subscription = {
  id: string;
  timestamp: string;
  email: string;
};

function formatSheetsTimestamp(date = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "00";

  return `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}:${get("second")}`;
}

function requireString(value: unknown, fieldName: string): string {
  const str = String(value || "").trim();
  if (!str) throw new Error(`${fieldName} is required`);
  return str;
}

async function appendToSheet(s: Subscription) {
  if (!process.env.GOOGLE_PRIVATE_KEY)
    throw new Error("Missing GOOGLE_PRIVATE_KEY");

  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
    throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_EMAIL");

  if (!process.env.GOOGLE_SHEET_ID_MAILING)
    throw new Error("Missing GOOGLE_SHEET_ID_MAILING");

  const privateKey = Buffer.from(
    process.env.GOOGLE_PRIVATE_KEY_B64!,
    "base64",
  ).toString("utf8");

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID_MAILING,
    range: "Sheet1!A:B",
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[s.timestamp, s.email]],
    },
  });
}

export async function POST(request: Request) {
  try {
    const p = await request.json();

    const subscription: Subscription = {
      id: globalThis.crypto?.randomUUID?.() ?? String(Date.now()),
      timestamp: formatSheetsTimestamp(),
      email: requireString(p.email, "Email"),
    };

    await appendToSheet(subscription);
    return NextResponse.json({ success: true, subscription }, { status: 201 });
  } catch (err: unknown) {
    console.error("Subscribe API error:", err);
    const message = err instanceof Error ? err.message : "Invalid request";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
