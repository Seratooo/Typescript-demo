import React, {useEffect,useState} from 'react';
import api from './services/api';
import User from './components/User'
interface iUsers {
  name: string;
  email: string;
}

function App() {
  const [users,setUsers] = useState<iUsers[]>([])
  useEffect(()=>{
      api.get<iUsers[]>('/users').then(response =>{
        setUsers(response.data)
      })
  },[])

  return (
  <div className="App">
      {users.map(user => <User key={user.email} user={user}/>)}
  </div>
  );
}
  
export default App;
