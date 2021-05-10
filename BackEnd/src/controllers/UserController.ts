import {Request, Response} from 'express'
import EmailServices from './services/EmailService'
const users = [
  {name: 'Abuba', email: 'abubacar.com'},
]

export default {
  async index(req:Request,res:Response){
    return res.json(users)
  },
  async create(req:Request, res:Response){
      const emailService = new EmailServices();
      emailService.sendEmail
      (
      {
        to:{name: 'Abubacar Correia',email:'abubacar@.com'},
        message:{subject:'Welcome to system',body:'Welcome'}
      }
       
      )
      return res.send()
  }
}