import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import "./admin.css";

const AdminPane = () => {
  const navigate = useNavigate();
  const [getvalue, setvalue] = useState("");
  const [name, setname] = useState("");
  const [getid, setid] = useState("");
  const [info, setinfo] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const handlepassUpdate = (id) => {
    console.log(id);
    console.log(getvalue);
    const { data } = axios.post(`http://localhost:5000/update/${id}`, {
      getvalue,
    });
    // console.log(idref.value)
    // console.log(cookies.info.user);
  };

  const handleDelete = (id) => {
    const { data } = axios.post(`http://localhost:5000/Delete/${id}`);
    if (!data) {
      alert(`${id} delete succesfull`);
    } else {
      alert(`delete not sucess`);
    }
  };

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/");
        console.log("dkjfhafd");
      } else {
        const { data } = await axios.get("http://localhost:5000/admin");
        console.log(data);
        setinfo(data);
      }
    };
    verifyUser();
  }, [cookies, navigate]);

  info.map((infos) => {
    console.log(infos.email);
  });

  return (
    <div>
      <h2>this is a admin panel </h2>
      <p>all users </p>

      <header role="banner">
        <h1>Admin Panel</h1>
        <ul class="utilities">
          <br />
          <li class="users">
            <a href="#">My Account</a>
          </li>
          <li class="logout warn">
            <a href="">Log Out</a>
          </li>
        </ul>
      </header>

      <nav role="navigation">
        <ul class="main">
          <li class="dashboard">
            <a href="admindashboard">Dashboard</a>
          </li>
          <li class="edit">
            <a href="#">Edit Website</a>
          </li>
          <li class="write">
            <a href="#">Write news</a>
          </li>
          <li class="comments">
            <a href="#">Ads</a>
          </li>
          <li class="users">
            <a href="#">Manage Users</a>
          </li>
        </ul>
      </nav>

      <main role="main">
        <section class="panel important">
          <h2>upcoming...</h2>
          <ul>
            <li>Information Panel</li>
          </ul>
        </section>

        <section class="panel important">
          <h2>All User</h2>

          <table>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>Role</th>
              <th className="action">Action</th>
            </tr>

            {info &&
              info.length > 0 &&
              info.map((infos) => (
                // <li>
                //   {infos.email}
                // </li>
                <tr>
                  <td>{infos._id}</td>
                  <td>{infos.email}</td>
                  <td>
                    <select
                      name="role"
                      defaultValue={infos.role}
                      onChange={(e) => {
                        setvalue(e.target.value);
                      }}
                      id="role"
                    >
                      <option value="ADMIN">admin</option>
                      <option value="MODERATOR">Maderator</option>
                      <option value="CLIENT">User</option>
                    </select>
                  </td>
                  <td>
                    <input
                      className="update"
                      onClick={() => {
                        handlepassUpdate(infos._id);
                      }}
                      type="submit"
                      value="update"
                    />
                    <input
                      className="update"
                      onClick={() => {
                        handleDelete(infos._id);
                      }}
                      type="submit"
                      value="Delete"
                    />
                  </td>
                </tr>
              ))}
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminPane;
