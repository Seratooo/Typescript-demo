interface IMailTo{
name: string;
email: string;
}
interface iMailMessage{
  subject:string;
  body: string;
  attachements?: string;
}
interface iMessageDTO{
  to: IMailTo;
  message: iMailMessage;
}
class EmailServices {
  sendEmail({to, message}:iMessageDTO){
    console.log(`Enviado para ${to.name}: ${message.subject}`)
  }
}

export default EmailServices