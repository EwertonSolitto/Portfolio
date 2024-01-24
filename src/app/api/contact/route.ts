import { NextResponse } from "next/server";
import getEmailHTML from "./getEmailHTML"

export const POST = async (req: Request, res: Response) => {
  const {name, email, phone, message, isPortuguese} = await req.json()
  
  const html = getEmailHTML(name, email, phone, message, isPortuguese)

  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: false,
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: 'Ewerton Solitto <ewerton2004@yahoo.com.br>',
      to: ["ewerton2004@yahoo.com.br", email],
      subject: isPortuguese ? "Obrigado por entrar em contato!" : "Thank you for your message!",
      html,
    })
    return NextResponse.json({ message: res.body}, { status: 200 })
  } catch {
    return NextResponse.json({ message: res.body}, { status: 500 })
  }
}