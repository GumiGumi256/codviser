import nodemailer from "nodemailer";
import {NextResponse} from 'next/server'


export async function POST(
  req: Request, res: Response
) {
  if (req.method === "POST") {
    try {
      const { email, name, phone, message } = await req.json(); // Create a Nodemailer transporter

      const transporter = nodemailer.createTransport({
        service: "Gmail", // Use your email service provider here if different from Gmail
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL,
          pass: process.env.NEXT_PUBLIC_PASSWORD,
        },
      }); // Email options

      const mailOptions = {
        from: "codviser@gmail.com",
        to: "codviser@gmail.com", // Update the email address here
        subject: "Form Submission Confirmation",
        html: `
 <p> ${name} </p>
 <p> Email: ${email}</p>
 <p>Phone Number: ${phone}</p>
 <p>Subject: ${message} </p>
 <p>Reach out to ${name}!</p>
 `,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

     return NextResponse.json({ message: "Email sent successfully!" }, {status: 200});
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ message: "Something went wrong when sending message!" }, {status: 500});
    }
  } else {
    return NextResponse.json({ message: "Method not allowed" }, {status: 405});
  }
}
