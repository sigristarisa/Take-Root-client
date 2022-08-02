import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { userContext, raisedBedContext } from "./helpers/createContext";
import Header from "./components/HomePage/Header";
import HomePage from "./components/HomePage/HomePage";
import SignupPage from "./components/Signup/SignupPage";
import LoginPage from "./components/Signup/LoginPage";
import CreateSquaresPage from "./components/CreateSquares/CreateSquaresPage";
import DesignRaisedBedPage from "./components/DesignRaisedBed/DesignRaisedBedPage";
import "./App.css";

function App() {
  const initialUserState = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userImage: "",
  };

  const [user, setUser] = useState(initialUserState);
  const [raisedBed, setRaisedBed] = useState({});

  const isLoggedIn = () => {
    const { email, password } = user;
    return !email || !password ? false : true;
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
      setUser(initialUserState);
    } else {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <raisedBedContext.Provider value={{ raisedBed, setRaisedBed }}>
        <div className='App'>
          <Header isLoggedIn={isLoggedIn} initialUserState={initialUserState} />
          <Routes>
            <Route path={"/"} element={<HomePage isLoggedIn={isLoggedIn} />} />
            <Route path={"/signup"} element={<SignupPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route
              path={"/create-raised-bed"}
              element={<CreateSquaresPage />}
            />
            <Route
              path={"/design-raised-bed"}
              element={<DesignRaisedBedPage />}
            />
          </Routes>
        </div>
      </raisedBedContext.Provider>
    </userContext.Provider>
  );
}

export default App;
