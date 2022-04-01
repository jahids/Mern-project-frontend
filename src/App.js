import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login/Login";
import Register from "./Component/register/Register";
import Secret from "./Component/Secret";

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/secret" element={<Secret/>}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
