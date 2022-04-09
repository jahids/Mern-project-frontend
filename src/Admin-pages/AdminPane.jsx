import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Cookies, useCookies } from 'react-cookie';
import { Navigate, useNavigate } from 'react-router-dom';

const AdminPane = () => {
        const navigate = useNavigate();
        const [getvalue, setvalue] = useState('')
        const [name, setname] = useState('')
        const [getid, setid] = useState('')
        const [info, setinfo] = useState([])
      const [cookies, setCookie, removeCookie] = useCookies([]);

      

      const handlepassUpdate =(id) => {
        console.log(id)
        console.log(getvalue);
      const {data}  =  axios.post(`http://localhost:5000/update/${id}`, {
        getvalue
      })
      // console.log(idref.value)
      // console.log(cookies.info.user);
      
      }


      const handleDelete = (id) => {
        const {data}  =  axios.post(`http://localhost:5000/Delete/${id}`)
        if(data){
          alert(`${id} delete succesfull`);
        }else{
          alert(`delete not sucess`);
        }
      }

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
    <td>
    
   
      <select name="role" defaultValue={infos.role} onChange={(e)=>{setvalue(e.target.value)}} id="role">
      <option value="ADMIN">admin</option>
      <option value="MODERATOR">Maderator</option>
      <option value="CLIENT">User</option>
      </select>
      <input onClick={()=>{handlepassUpdate(infos._id)}} type="submit" value="update" />
      <input onClick={()=>{handleDelete(infos._id)}} type="submit" value="Delete" />
    
    </td>


{/* 
<form
          action="/admin/update"
          method="post"
          class="manage-user-form"
        >
          <input type="hidden" name="id" value={infos._id} />
          <select name="role" id="role">
            <option value="ADMIN" { user.role === 'ADMIN' ? 'selected' : '' } >Admin</option>
            <option value="MODERATOR" {= user.role === 'MODERATOR' ? 'selected' : '' }>Moderator</option>
            <option value="CLIENT" { user.role === 'CLIENT' ? 'selected' : '' }>Client</option>
          </select>
          <input type="submit" value="update">
        </form>



</td> */}
  </tr>

      )
    } 
 
</table>

        </div>
    );
};

export default AdminPane;