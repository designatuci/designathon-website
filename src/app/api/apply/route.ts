import { google } from "googleapis";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Submission = {
  id: string;
  timestamp: string;
  email: string;
  name: string;
  major: string;
  firstAthon: string;
  university: string;
  educationLevel: string;
  gender: string;
  ethnicity: string;
  ageAndStudent: string;
  timezone: string;
  attendanceMode: string;
  transportation: string;
  howHeard: string;
  background: string;
  motivation: string;
  boba: string;
  otherQuestions?: string;
};

const submissions: Submission[] = [];

async function appendToSheet(s: Submission) {
  if (!process.env.GOOGLE_PRIVATE_KEY)
    throw new Error("Missing GOOGLE_PRIVATE_KEY");

  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
    throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_EMAIL");

  if (!process.env.GOOGLE_SHEET_ID) throw new Error("Missing GOOGLE_SHEET_ID");

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:R",
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          s.timestamp,
          s.email,
          s.name,
          s.major,
          s.firstAthon,
          s.university,
          s.educationLevel,
          s.gender,
          s.ethnicity,
          s.ageAndStudent,
          s.timezone,
          s.attendanceMode,
          s.transportation,
          s.howHeard,
          s.background,
          s.motivation,
          s.boba,
          s.otherQuestions ?? "",
        ],
      ],
    },
  });
}

function requireString(value: unknown, fieldName: string): string {
  const str = String(value || "").trim();
  if (!str) throw new Error(`${fieldName} is required`);
  return str;
}

export async function POST(request: Request) {
  try {
    const p = await request.json();

    const submission: Submission = {
      id: globalThis.crypto?.randomUUID?.() ?? String(Date.now()),
      timestamp: new Date().toISOString(),
      email: requireString(p.email, "Email"),
      name: requireString(p.name, "Name"),
      major: requireString(p.major, "Major"),
      firstAthon: requireString(p.firstAthon, "First a-thon"),
      university: requireString(p.university, "University"),
      educationLevel: requireString(p.educationLevel, "Education level"),
      gender: requireString(p.gender, "Gender"),
      ethnicity: requireString(p.ethnicity, "Ethnicity"),
      ageAndStudent: requireString(
        p.ageAndStudent,
        "Age & student eligibility",
      ),
      timezone: requireString(p.timezone, "Timezone"),
      attendanceMode: requireString(p.attendanceMode, "Attendance mode"),
      transportation: requireString(p.transportation, "Transportation"),
      howHeard: requireString(p.howHeard, "How heard"),
      background: requireString(p.background, "Design background"),
      motivation: requireString(p.motivation, "Motivation"),
      boba: requireString(p.boba, "Favorite drink"),
      otherQuestions: p.otherQuestions ? String(p.otherQuestions) : undefined,
    };

    await appendToSheet(submission);
    submissions.push(submission);

    return NextResponse.json({ success: true, submission }, { status: 201 });
  } catch (err) {
    console.error("Apply API error:", err);
    const message = err instanceof Error ? err.message : "Invalid request";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ submissions });
}
