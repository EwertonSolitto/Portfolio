import getEmailHTML from "./getEmailHTML";

export default async function sendMessage(
  name: string, 
  email: string, 
  phone: string, 
  message: string
) {
  
  const html = getEmailHTML(name, email, phone, message)

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

transporter.sendMail({
    from: 'Ewerton Solitto <ewerton2004@yahoo.com.br>',
    to: ["ewerton2004@yahoo.com.br", email],
    subject: "Obrigado por entrar em contato!",
    html,
  })
  .then((response: any)  => {
    console.log(response)
    return true
  })
  .catch((error: any) => {
    console.log(error)
    return false
  })
}