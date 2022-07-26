import { useState } from "react";
import { userContext } from "./helpers/userContext";
import SignupPage from "./components/Signup/SignupPage";
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
        <SignupPage />
      </div>
    </userContext.Provider>
  );
}

export default App;
