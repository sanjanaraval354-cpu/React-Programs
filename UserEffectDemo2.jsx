import { useEffect, useState } from "react";
import "../assets/card.css"

function UseEffectAPIcalling(){
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(data => setUsers(data));
  },[]);
  return(
    <div>
      <h2>Users List</h2>
      {
        users.map((user)=>
          <div className="card">
           <p>Username : {user.username}</p>
           <p>Email : {user.email}</p>
          </div>
        )
      }
    </div>
  );
}
export default UseEffectADemo2;
