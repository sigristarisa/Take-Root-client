import { useState } from "react";
import { userContext } from "./helpers/userContext";
import SignUpPage from "./components/SignUp/SignUpPage";
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
        <SignUpPage />
      </div>
    </userContext.Provider>
  );
}

export default App;
