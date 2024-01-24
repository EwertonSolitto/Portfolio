export default function getEmailHTML( 
  name: FormDataEntryValue | null, 
  email: FormDataEntryValue | null, 
  phone: FormDataEntryValue | null, 
  message: FormDataEntryValue | null,
  isPortuguese: boolean
) {
  return `
  <table border="0" cellspacing="0" cellpadding="0" width="512" align="center" style="font-family:Arial, Helvetica, sans-serif; color:#E8E8E8; background-color:#0F1621; padding: 0.5rem; margin-left:auto;margin-right:auto;margin-top:0px;margin-bottom:0px;width:512px;max-width:512px;">
    <tbody>
      <tr>
        <td style="padding: 24px 24px 12px;">
          <h1 style="font-size: 2rem; margin: 0; margin-bottom: 16px;">${isPortuguese ? 'Seu email foi recebido' : 'Your email has been received'}!</h1>
        </td>
      </tr>
      <tr>
        <td style="padding-left: 24px; padding-bottom: 18px;">
          <span style="font-size: 20px; font-weight: bold;">${isPortuguese ? 'Informações de contato' : 'Contact information'}:</span>
        </td>
      </tr>
      <tr>
        <td>
          <table border="0" cellspacing="0" cellpadding="0" width="100%" align="center" >
            <tr>
              <td style="padding-left: 24px; padding-right: 24px; padding-bottom: 12px;">
                <span style="font-size: 16px;">
                  ${isPortuguese ? 'Nome' : 'Name'}: ${name}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding-left: 24px; padding-right: 24px; padding-bottom: 12px;">
                <span style="font-size: 16px;">
                Email: ${email}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding-left: 24px; padding-right: 24px; padding-bottom: 12px;">
                <span style="font-size: 16px;">
                ${isPortuguese ? 'Telefone' : 'Phone'}: ${phone}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding-left: 24px; padding-right: 24px; padding-bottom: 12px;">
                <span style="font-size: 16px;">
                ${isPortuguese ? 'Mensagem' : 'Message'}: ${message}
                </span>
              </td>
            </tr>
          </table>
      </td>
      </tr>
    </tbody>
  </table>
  `
}