import { NextResponse } from "next/server";

interface QuoteRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  products: string[];
  volume?: string;
  timeline?: string;
  message: string;
}

/**
 * Wire up your email provider here (SendGrid, Resend, AWS SES, etc.).
 * This placeholder logs the submission and returns success.
 *
 * Example with Resend:
 *   import { Resend } from 'resend';
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({ from, to, subject, html });
 */
async function sendEmail(data: QuoteRequest): Promise<void> {
  const lines = [
    `New quote request from ${data.firstName} ${data.lastName}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    `Company: ${data.company}`,
    data.products.length > 0
      ? `Products: ${data.products.join(", ")}`
      : null,
    data.volume ? `Volume: ${data.volume}` : null,
    data.timeline ? `Timeline: ${data.timeline}` : null,
    `\nMessage:\n${data.message}`,
  ]
    .filter(Boolean)
    .join("\n");

  // TODO: Replace with your email provider
  console.log("[Quote Submission]\n", lines);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuoteRequest;

    if (!body.firstName || !body.lastName || !body.email || !body.company || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    await sendEmail(body);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 },
    );
  }
}
