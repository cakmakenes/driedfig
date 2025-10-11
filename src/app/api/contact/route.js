import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, company, phone, subject, message, website } = await request.json();

    // Honeypot spam protection
    if (website) {
      return new Response("Spam detected", { status: 400 });
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response("Missing required fields", { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || "info@kaplanlarincir.com.tr",
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Sent from Kaplanlar website contact form</em></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
