import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AdminPane from '../Admin-pages/AdminPane';


const Secret = () => {
    const navigate = useNavigate();
    const [name, setname] = useState('')
    const [getvalue, setvalue] = useState('')
    const [user , setuser] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const handlepassUpdate =() => {
    console.log(getvalue);
  const {data}  =  axios.post(`http://localhost:5000/UserE/${cookies.info.user}`, {
    getvalue
  })


if(data){
  alert('not updated')
}else{
  toast.success('Email Updated')
}
  
  }

  // console.log(cookies.info.user,'direct cookies')
  const id = cookies.info.user;
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/");
      } else {
        const { data } = await axios.post(
          "http://localhost:5000/User",
          {id},
          {
            withCredentials: true,
          }

        );

        console.log(data, 'backend single dtaa')
        console.log(data.user.email)
        setuser(data.user);

        if (!data) {
          removeCookie("jwt");
          navigate("/");
        } else{
          setname(data);
          console.log(data, "jahid")
          toast(`Hi ${data.user.email} 🦄`, {
            theme: "dark",
          });
         
          
        }
          
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logout = () => {
    removeCookie("jwt");
    removeCookie("info");
    navigate("/");
  };


    return (
        <div>

<table>
  <tr>
    <th>Id</th>
    <th>Email</th>
    <th>Role</th>
  </tr>
  <tr>
    <td>{`342343`}</td> 
    
    <input onChange={(e)=>setvalue(e.target.value)}  type="email"  defaultValue={user.email} id="" />

    <td>{user.role}</td>
  </tr>

  <input onClick={handlepassUpdate} type="submit" value="update" />
 
</table>
            
            <button onClick={()=>{logout()}} > logout</button>

                      
            <ToastContainer/>
        </div>
    );
};

export default Secret;