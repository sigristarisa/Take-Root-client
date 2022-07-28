import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { userContext, squareContext } from "./helpers/createContext";
import client from "./helpers/client";
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

  // useEffect(() => {
  //   client.post("/user", user, true).then((res) => {
  //     const loggedInUser = JSON.stringify(res.data);
  //     setUser(JSON.parse(loggedInUser));
  //   });
  // }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <squareContext.Provider value={{ square, setSquare }}>
        <DndProvider backend={HTML5Backend}>
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
        </DndProvider>
      </squareContext.Provider>
    </userContext.Provider>
  );
}

export default App;
