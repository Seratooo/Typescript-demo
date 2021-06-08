//DIAGRAMA DE OBJECTO
import isEmail from 'validator/lib/isEmail'
const email = 'pauloserato2018@gmail.com'

interface EmailProtocol{
  IsEmail(value: string):boolean;
}

class ValidarEmail implements EmailProtocol{
  IsEmail(value:string){
    return isEmail(value)
  }
}

const validarEmail = new ValidarEmail()


if(validarEmail.IsEmail(email)){
  console.log('valido')
}else{
  console.log('invalido')
}

