import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { userContext } from "./helpers/userContext";
import LandingPage from "./components/LandingPage/LandingPage";
import SignupPage from "./components/Signup/SignupPage";
import LoginPage from "./components/Login/LoginPage";
import MainPage from "./components/MainPage/MainPage";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userImage: "",
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      <div className='App'>
        <Routes>
          <Route path={"/"} element={<LandingPage />} />
          <Route path={"/signup"} element={<SignupPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/home"} element={<MainPage />} />
        </Routes>
      </div>
    </userContext.Provider>
  );
}

export default App;
