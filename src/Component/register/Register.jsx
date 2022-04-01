import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
<div class="limiter">
    <div class="container-login100">
        <div class="wrap-login100 mb-5">
            <div class="login100-pic js-tilt" data-tilt>
                <img src="https://www.ictamilaonline.com/wp-content/uploads/2021/06/138-1388103_user-login-icon-login.png" alt="IMG"/>
            </div>

            <form class="login100-form validate-form mb-5">
                <span class="login100-form-title">
                    Member Register
                </span>

                <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                    <input class="input100" type="text" name="email" placeholder="Email"/>
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </div>

                <div class="wrap-input100 validate-input" data-validate = "Password is required">
                    <input class="input100" type="password" name="pass" placeholder="Password"/>
                    <span class="focus-input100"></span>
                    <span class="symbol-input100">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                    </span>
                </div>
                
                <div class="wrap-input100 validate-input" data-validate = "Password is required">
                {/* <label for="cars">Chose the role</label> */}
                <select placeholder='Role' id="cars" class="input100">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                </select>
  
                    
                </div>


                <div class="container-login100-form-btn">
                    <button class="login100-form-btn">
                        Register
                    </button>
                </div>

                

                <div class="text-center p-t-136">
                    <Link to={'/'}>
                        login your Account?
                        <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                        </Link>
                </div>
            </form>
        </div>
    </div>
</div>

    );
};

export default Register;