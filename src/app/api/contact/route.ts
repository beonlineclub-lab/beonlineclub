import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "BeOnline.club Contact <onboarding@resend.dev>",
      to: ["kvdevelopers096@gmail.com"],
      replyTo: email,
      subject: `New project inquiry from ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: monospace; background: #080B12; color: #ffffff; padding: 32px; border-radius: 12px; max-width: 600px;">
          <div style="border-bottom: 1px solid #1E2535; padding-bottom: 16px; margin-bottom: 24px;">
            <span style="color: #00F5FF; font-size: 12px; letter-spacing: 0.2em;">BEONLINE.CLUB — NEW PROJECT INQUIRY</span>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="color: #A0ADB8; font-size: 13px; padding: 8px 0; width: 120px;">&gt; Name</td>
              <td style="color: #ffffff; font-size: 13px; padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="color: #A0ADB8; font-size: 13px; padding: 8px 0;">&gt; Email</td>
              <td style="font-size: 13px; padding: 8px 0;"><a href="mailto:${email}" style="color: #00F5FF;">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="color: #A0ADB8; font-size: 13px; padding: 8px 0;">&gt; Company</td>
              <td style="color: #ffffff; font-size: 13px; padding: 8px 0;">${company}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top: 24px; padding: 20px; background: #0F1420; border-radius: 8px; border: 1px solid #1E2535;">
            <p style="color: #A0ADB8; font-size: 12px; letter-spacing: 0.15em; margin: 0 0 12px;">&gt; PROJECT DETAILS</p>
            <p style="color: #ffffff; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #1E2535; font-size: 11px; margin-top: 32px; letter-spacing: 0.1em;">
            Sent via BeOnline.club contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
