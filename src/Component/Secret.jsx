import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AdminPane from '../Admin-pages/AdminPane';


const Secret = () => {
    const navigate = useNavigate();
    const [name, setname] = useState('')
  const [cookies, setCookie, removeCookie] = useCookies([]);

  
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/");
      } else {
        const { data } = await axios.post(
          "http://localhost:5000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/");
        } else{
          setname(data);
          console.log(data, "jahid")
          toast(`Hi ${data.user} 🦄`, {
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
<h1>This a user </h1>
            <h2>helllo{name.user}</h2>

            <h2>your role is {name.role}</h2>
            
            <button onClick={()=>{logout()}} > logout</button>

                      
            <ToastContainer/>
        </div>
    );
};

export default Secret;