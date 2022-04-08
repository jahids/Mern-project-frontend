import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Cookies, useCookies } from 'react-cookie';
import { Navigate, useNavigate } from 'react-router-dom';

const AdminPane = () => {
        const navigate = useNavigate();
        const [name, setname] = useState('')
        const [info, setinfo] = useState([])
      const [cookies, setCookie, removeCookie] = useCookies([]);
      useEffect(() => {
        const verifyUser = async () => {

          if (!cookies.jwt) {

            navigate("/");
            console.log('dkjfhafd')
            

          } else {

            const { data } = await axios.get('http://localhost:5000/admin')
            console.log(data)
            setinfo(data)
        
              
          }
        };
        verifyUser();
      }, [cookies, navigate]);


        info.map(infos => {
          console.log(infos.email)
        })
 

    return (
        <div>
            <h2>this is a admin panel </h2>
            <p>all users </p>

            <table>
  <tr>
    <th>id</th>
    <th>email</th>
    <th>Role</th>

 
  </tr>
  

      {
       info && info.length > 0 &&
      info.map(infos => 
        // <li>
        //   {infos.email}
        // </li>
    <tr>
    <td>{infos._id}</td>
    <td>{infos.email}</td>
    <td>{infos.role}</td>
  </tr>

      )
    } 
 
</table>

        </div>
    );
};

export default AdminPane;