import axios from 'axios';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const Secret = () => {
    const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          {
            withCredentials: true,
          }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/");
        } else
          toast(`Hi ${data.user} 🦄`, {
            theme: "dark",
          });
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logout = () => {
    removeCookie("jwt");
    navigate("/");
  };
    return (
        <div>
            <h2>this is secret</h2>
            <button onClick={()=>{logout()}} > logout</button>
            <ToastContainer/>
        </div>
    );
};

export default Secret;