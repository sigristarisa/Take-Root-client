import { useContext } from "react";
import { userContext } from "../../helpers/createContext";
import SignupHeader from "./SignupHeader";
import SignupForm from "./SignupForm";
import "./Signup.css";
const SignupPage = ({ isLoggedIn }) => {
  const { user } = useContext(userContext);

  return (
    <div>
      <SignupHeader />
      {isLoggedIn(user) && <SignupForm />}
    </div>
  );
};

export default SignupPage;
