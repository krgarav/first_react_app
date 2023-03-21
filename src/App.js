import {React,useState} from 'react';
import './App.css';
import AddNewUser from './Components/Users/AddNewUser';
import UserList from './Components/Users/UserList';

const App=(props)=> {
 const [userData,setUserData]=useState([])
  const onAddDataHandler=(data)=>{
    setUserData((prevInput)=>{
     return [...prevInput,data]
    });
  }
  return (
    <div className='background' >
     <AddNewUser onAddData={onAddDataHandler}
     />
     <UserList users={userData} />
    </div>
  );
}

export default App;
