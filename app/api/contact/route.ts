import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY) || "demo_api_key";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Send email to admin
    const { error } = await resend.emails.send({
      from: 'admin@shebright.tech', // Must be your verified domain
      to: ['admin@shebright.tech'],
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ca5b8e;">New Contact Form Submission</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin: 0 0 15px 0; color: #333;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border-left: 4px solid #ca5b8e; margin: 20px 0;">
            <h3 style="margin: 0 0 15px 0; color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0; padding: 20px; background: #fef0fc; border-radius: 8px;">
            <p style="margin: 0; color: #666;">
              Reply to this inquiry: 
              <a href="mailto:${email}" style="color: #ca5b8e; text-decoration: none;">${email}</a>
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: 'admin@shebright.tech',
      to: [email],
      subject: 'Thank you for contacting SheBright!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 40px 20px; background: linear-gradient(135deg, #ca5b8e, #cc6594); color: white; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">We've received your message</p>
          </div>
          
          <div style="padding: 30px 20px; background: #fff; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
            <h2 style="color: #333; margin: 0 0 20px 0;">What happens next?</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0; color: #555;">✅ <strong>Message Received:</strong> Your inquiry about "${subject}" has been logged</p>
              <p style="margin: 10px 0; color: #555;">⏰ <strong>Response Time:</strong> We typically respond within 24 hours</p>
              <p style="margin: 10px 0; color: #555;">📧 <strong>Next Steps:</strong> Our team will review and get back to you soon</p>
            </div>
            
            <div style="background: #fef0fc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin: 0 0 10px 0; color: #ca5b8e;">Your Message Summary:</h3>
              <p style="margin: 5px 0; color: #666;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 5px 0; color: #666; line-height: 1.5;">${message.substring(0, 150)}${message.length > 150 ? '...' : ''}</p>
            </div>
            
            <p style="color: #666; margin: 30px 0 10px 0;">Best regards,<br><strong style="color: #ca5b8e;">The SheBright Team</strong></p>
            
            <div style="text-align: center; margin: 30px 0; padding: 20px; background: #f8f9fa; border-radius: 8px;">
              <p style="margin: 0; color: #888; font-size: 14px;">
                Questions? Reply to this email or contact us at 
                <a href="mailto:admin@shebright.tech" style="color: #ca5b8e;">admin@shebright.tech</a>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}