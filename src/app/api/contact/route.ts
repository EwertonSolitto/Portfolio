import { NextResponse } from "next/server";
import getEmailHTML from "./getEmailHTML"

export const POST = async (req: Request, res: Response) => {
  const {name, email, phone, message} = await req.json()
  
  const html = getEmailHTML(name, email, phone, message)

  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: false,
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: ''//process.env.PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: 'Ewerton Solitto <ewerton2004@yahoo.com.br>',
      to: ["ewerton2004@yahoo.com.br", email],
      subject: "Obrigado por entrar em contato!",
      html,
    })
    return NextResponse.json({ message: res.body}, { status: 200 })
  } catch {
    return NextResponse.json({ message: res.body}, { status: 500 })
  }
}