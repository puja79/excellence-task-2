import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Pagination=(props)=>{
const [items, setItems] = useState([])
useEffect(()=>{
   showData()
},[])
   const showData = async()=>{
    const response = await axios.get(`https://reqres.in/api/users?page=2`)
    setItems(response.data.data)
   }
  

return (
    <>
    <div className="todo_style">
         {
             items.map((item)=>{
                 console.log(item)
                 return(
                     <div className="section">
                       
   
                        <img src={item.avatar}/><br/>
                        Full Name: <span>{item.first_name} {item.last_name}</span><br/>
                        Email : <span>{item.email}</span>
                       
                     </div>
                 )
             })
         }
</div>
</>
);

};
export default Pagination;