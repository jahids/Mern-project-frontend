import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [role, setrole] = useState('');

    const handleGetValue = async (e) => {
        console.log(email , password, role);

        try {

            const {data} = await axios.post('http://localhost:5000/register', {
                email, password, role
            })

            console.log(data);
            if(data){
                alert('user registeerd')
            }
            
        } catch (error) {
            console.log(error);
        }

        
       


        e.preventDefault();
    }

    return (
<div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100 mb-5">
            <div className="login100-pic js-tilt" data-tilt>
                <img src="https://www.ictamilaonline.com/wp-content/uploads/2021/06/138-1388103_user-login-icon-login.png" alt="IMG"/>
            </div>

            <form className="login100-form validate-form mb-5">
                <span className="login100-form-title">
                    Member Register
                </span>

                <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input className="input100" type="text" onChange={e=>setemail(e.target.value)} name="email" placeholder="Email"/>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>

                <div className="wrap-input100 validate-input" data-validate = "Password is required">
                    <input className="input100" type="password" onChange={e=>setpassword(e.target.value)} name="pass" placeholder="Password"/>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                        <i className="fa fa-lock" aria-hidden="true"></i>
                    </span>
                </div>
                
                <div className="wrap-input100 validate-input" data-validate = "Password is required">
                {/* <label for="cars">Chose the role</label> */}
                <select placeholder='Role' onChange={e=>setrole(e.target.value)}  className="input100">
                <option value="user">User</option>
                <option value="admin">Admin</option>
                </select>
  
                    
                </div>


                <div className="container-login100-form-btn">
                    <button onClick={(e)=>{handleGetValue(e)}} className="login100-form-btn">
                        Register
                    </button>
                </div>

                

                <div className="text-center p-t-136">
                    <Link to={'/'}>
                        login your Account?
                        <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                        </Link>
                </div>
            </form>
        </div>
    </div>
</div>

    );
};

export default Register;