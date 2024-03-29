import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  userContext,
  raisedBedContext,
  initialUserState,
} from "./helpers/createContext";
import Header from "./components/HomePage/Header";
import HomePage from "./components/HomePage/HomePage";
import SignupPage from "./components/SignUp/SignUpPage";
import LoginPage from "./components/SignUp/LoginPage";
import CreateSquaresPage from "./components/CreateSquares/CreateSquaresPage";
import DesignRaisedBedPage from "./components/DesignRaisedBed/DesignRaisedBedPage";
import ViewRaisedBedPage from "./components/ViewRaisedBed/ViewRaisedBedPage";
import RaisedBedGalleryPage from "./components/RaisedBedGallery/RaisedBedGalleryPage";
import Footer from "./components/HomePage/Footer";
import "./App.css";

function App() {
  const [user, setUser] = useState(initialUserState);
  const [raisedBed, setRaisedBed] = useState({});
  const [headerColor, setHeaderColor] = useState("");

  const isLoggedIn = () => {
    const loggedInUser = localStorage.getItem("user");
    return loggedInUser ? true : false;
  };

  useEffect(() => {
    if (!isLoggedIn()) {
      setUser(initialUserState);
    } else {
      const loggedInUser = localStorage.getItem("user");
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <raisedBedContext.Provider value={{ raisedBed, setRaisedBed }}>
        <div className="App">
          <Header
            isLoggedIn={isLoggedIn}
            initialUserState={initialUserState}
            headerColor={headerColor}
            setHeaderColor={setHeaderColor}
          />

          <Routes>
            <Route
              path={"/"}
              element={
                <HomePage
                  isLoggedIn={isLoggedIn}
                  setHeaderColor={setHeaderColor}
                />
              }
            />
            <Route path={"/signup"} element={<SignupPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route
              path={"/create-raised-bed"}
              element={<CreateSquaresPage setHeaderColor={setHeaderColor} />}
            />
            <Route
              path={"/design-raised-bed"}
              element={<DesignRaisedBedPage setHeaderColor={setHeaderColor} />}
            />
            <Route
              path={"/view-raised-bed"}
              element={<ViewRaisedBedPage setHeaderColor={setHeaderColor} />}
            />
            <Route
              path={"/raised-bed-gallery"}
              element={<RaisedBedGalleryPage />}
            />
          </Routes>
          <Footer />
        </div>
      </raisedBedContext.Provider>
    </userContext.Provider>
  );
}

export default App;
