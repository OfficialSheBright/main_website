import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, name, otp } = await request.json();

  if (!email || !name || !otp) {
    return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
  }

  // Prepare email
  const subject = "Your SheBright OTP Code";
  const html = `
    <div style="font-family: Arial, sans-serif; color: #222;">
      <h2 style="color: #ca5b8e;">SheBright OTP Verification</h2>
      <p>Hi ${name},</p>
      <p>Your One-Time Password (OTP) is:</p>
      <div style="font-size: 2rem; font-weight: bold; letter-spacing: 0.2em; color: #ca5b8e; margin: 16px 0;">
        ${otp}
      </div>
      <p>This code is valid for 10 minutes. Please do not share it with anyone.</p>
      <br/>
      <p>Thank you,<br/>SheBright Team</p>
    </div>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "SheBright <admin@shebright.tech>",
        to: [email],
        subject,
        html
      })
    });

    if (!res.ok) {
      const error = await res.text();
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}