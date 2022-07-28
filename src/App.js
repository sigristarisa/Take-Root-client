import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { userContext, squareContext } from "./helpers/createContext";
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

  const [square, setSquare] = useState({
    row: 0,
    column: 0,
  });

  return (
    <userContext.Provider value={{ user, setUser }}>
      <squareContext.Provider value={{ square, setSquare }}>
        <div className='App'>
          <Routes>
            <Route path={"/"} element={<LandingPage />} />
            <Route path={"/signup"} element={<SignupPage />} />
            <Route path={"/login"} element={<LoginPage />} />
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
      </squareContext.Provider>
    </userContext.Provider>
  );
}

export default App;
