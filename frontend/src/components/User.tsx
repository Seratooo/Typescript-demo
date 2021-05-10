import React from 'react'

interface iUsers {
  name: string;
  email: string;
}
interface Props{
  user: iUsers;
}

const User: React.FC<Props> =({user})=>{
  return(
    <div>
      <strong>Nome: </strong> {user.name} <br/>
      <strong>Email: </strong> {user.email} <br/>
    </div>
  )
}

export default User;