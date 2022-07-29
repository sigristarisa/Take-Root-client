import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { userContext, raisedBedContext } from "./helpers/createContext";
import LandingPage from "./components/LandingPage/LandingPage";
import SignupPage from "./components/Signup/SignupPage";
import LoginPage from "./components/Login/LoginPage";
import MainPage from "./components/MainPage/MainPage";
import CreateSquaresPage from "./components/CreateSquares/CreateSquaresPage";
import DesignRaisedBedPage from "./components/DesignRaisedBed/DesignRaisedBedPage";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userImage: "",
  });

  const [raisedBed, setRaisedBed] = useState({});

  const isLoggedIn = (user) => {
    const userDataArr = Object.keys(user);
    const isEmpty = userDataArr.filter((userData) => userData === "");
    return isEmpty ? false : true;
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <raisedBedContext.Provider value={{ raisedBed, setRaisedBed }}>
        <DndProvider backend={HTML5Backend}>
          <div className='App'>
            <Routes>
              <Route path={"/"} element={<LandingPage />} />
              <Route
                path={"/signup"}
                element={<SignupPage isLoggedIn={isLoggedIn} />}
              />
              <Route
                path={"/login"}
                element={<LoginPage isLoggedIn={isLoggedIn} />}
              />
              <Route path={"/home"} element={<MainPage />} />
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
        </DndProvider>
      </raisedBedContext.Provider>
    </userContext.Provider>
  );
}

export default App;
