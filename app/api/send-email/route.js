import nodemailer from "nodemailer";
import path from "path";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validasi input
    if (!name || !email || !message) {
      return Response.json(
        { error: "Semua field harus diisi (name, email, message)" },
        { status: 400 }
      );
    }

    // Konfigurasi transporter Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Path ke header image
    const headerImagePath = path.join(process.cwd(), "public", "email-header.png");

    // Kirim email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Pesan dari ${name} — Portfolio Contact`,
      attachments: [
        {
          filename: "email-header.png",
          path: headerImagePath,
          cid: "headerimage",
        },
      ],
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1a1a1a; border-radius: 12px; overflow: hidden;">
          <!-- Header with Jacquard 12 font image -->
          <div style="background: #111; padding: 0; text-align: center;">
            <img src="cid:headerimage" alt="Pesan Baru Dari Portofolio" style="display: block; width: 100%; max-width: 600px; height: auto;" />
          </div>

          <!-- Postcard Body -->
          <div style="position: relative; background: linear-gradient(135deg, #f5e6c8 0%, #e8d5a8 40%, #f0debb 70%, #e2ceA0 100%); padding: 30px 30px 30px 30px; min-height: 250px;">
            
            <!-- Postal stripes (right side) -->
            <div style="position: absolute; top: 0; right: 0; width: 60px; height: 100%; display: flex; flex-direction: column;">
              <div style="height: 14px; background: #c0392b;"></div>
              <div style="height: 10px; background: #f5e6c8;"></div>
              <div style="height: 14px; background: #2c5aa0;"></div>
              <div style="height: 10px; background: #f5e6c8;"></div>
              <div style="height: 14px; background: #c0392b;"></div>
              <div style="height: 10px; background: #f5e6c8;"></div>
              <div style="height: 14px; background: #2c5aa0;"></div>
              <div style="height: 10px; background: #f5e6c8;"></div>
              <div style="height: 14px; background: #c0392b;"></div>
              <div style="height: 10px; background: #f5e6c8;"></div>
              <div style="height: 14px; background: #2c5aa0;"></div>
              <div style="height: 10px; background: #f5e6c8;"></div>
              <div style="height: 14px; background: #c0392b;"></div>
              <div style="flex: 1; background: #f5e6c8;"></div>
            </div>

            <!-- Postmark stamp -->
            <div style="position: absolute; top: 16px; right: 75px; width: 70px; height: 70px; border: 2px solid rgba(0,0,0,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; transform: rotate(-15deg);">
              <div style="text-align: center; color: rgba(0,0,0,0.2); font-size: 10px; font-family: monospace; line-height: 1.2;">
                <div style="border-bottom: 1px solid rgba(0,0,0,0.15); padding-bottom: 2px;">MAIL</div>
                <div style="font-size: 14px; font-weight: bold; padding: 2px 0;">✦</div>
                <div style="border-top: 1px solid rgba(0,0,0,0.15); padding-top: 2px;">POST</div>
              </div>
            </div>

            <!-- Content -->
            <div style="max-width: 480px; padding-right: 70px;">
              <p style="margin: 0 0 4px 0; font-size: 14px; color: #5a4a3a; font-weight: bold; font-family: Georgia, serif;">Nama :</p>
              <p style="margin: 0 0 6px 0; font-size: 16px; color: #2c2016; font-family: Georgia, serif;">${name}</p>
              <hr style="border: none; border-bottom: 1px solid #c0a882; margin: 0 0 18px 0;">

              <p style="margin: 0 0 4px 0; font-size: 14px; color: #5a4a3a; font-weight: bold; font-family: Georgia, serif;">Email :</p>
              <p style="margin: 0 0 6px 0; font-size: 16px; color: #2c2016; font-family: Georgia, serif;"><a href="mailto:${email}" style="color: #2c5aa0; text-decoration: none;">${email}</a></p>
              <hr style="border: none; border-bottom: 1px solid #c0a882; margin: 0 0 18px 0;">

              <p style="margin: 0 0 4px 0; font-size: 14px; color: #5a4a3a; font-weight: bold; font-family: Georgia, serif;">Pesan :</p>
              <p style="margin: 0 0 6px 0; font-size: 16px; color: #2c2016; font-family: Georgia, serif; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
              <hr style="border: none; border-bottom: 1px solid #c0a882; margin: 0 0 10px 0;">
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #111; padding: 14px 30px; text-align: center;">
            <p style="margin: 0; color: #666; font-size: 11px; font-family: Georgia, serif;">
              Dikirim melalui Portfolio Contact Form
            </p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true, message: "Email berhasil terkirim!" });
  } catch (error) {
    console.error("Email Error:", error);
    return Response.json(
      { error: "Gagal mengirim email. Coba lagi nanti." },
      { status: 500 }
    );
  }
}
