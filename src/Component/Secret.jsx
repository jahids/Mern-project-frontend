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



                    







<header role="banner">
  <h1>User Panel</h1>
  <ul class="utilities">
    <br/>
    <li class="users">My Account</li>
    <li class="logout warn" onClick={()=>{logout()}}> Log Out</li>
   
  </ul>
</header>

<nav role='navigation'>
  <ul class="main">
    <li class="dashboard"><a href="admindashboard">Dashboard</a></li>
    <li class="edit"><a href="#">Edit Website</a></li>
    <li class="write"><a href="#">Write news</a></li>
    <li class="comments"><a href="#">Ads</a></li>
    <li class="users"><a href="#">Manage Users</a></li>
  </ul>
</nav>


<main role="main">
  
  <section class="panel important">
   <h2>Write Some News</h2>
    <ul>
      <li>Information Panel</li>
    </ul>
  </section>
  
  <section class="panel important">
    <h2>Write a post</h2>
     

    <table>
  <tr>
    <th>id</th>
    <th>email</th>
    <th>Role</th>
    <th>Action</th>

 
  </tr>
  

    <tr>
    <td>{user._id}</td>
      <td>
    <input onChange={(e)=>setvalue(e.target.value)}  type="email"  defaultValue={user.email} id="" />
    </td>
    <td>{user.role}</td>
    
    <td>
      <input onClick={handlepassUpdate} type="submit" value="update" />
      </td>
    </tr>
 

 </table> 


  </section>

</main>

<ToastContainer/>
</div>

    );
};

export default Secret;