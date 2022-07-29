import { useContext } from "react";
import { userContext } from "../../helpers/createContext";

import SignupHeader from "../Signup/SignupHeader";
import LoginForm from "./LoginForm";

const LoginPage = ({ isLoggedIn }) => {
  const { user } = useContext(userContext);

  return (
    <div>
      <SignupHeader />
      {isLoggedIn(user) && <LoginForm />}
    </div>
  );
};

export default LoginPage;
