import { useContext } from "react";
import { userContext } from "../../helpers/createContext";
import LoginSignupButton from "./LoginSignupButtons";

const Header = ({ isLoggedIn }) => {
  const { user } = useContext(userContext);

  return (
    <header className='login-signup-header'>
      <div></div>
      <h1 className='logo'>TAKE ROOT</h1>
      {isLoggedIn(user) ? <div>hi</div> : <LoginSignupButton />}
    </header>
  );
};

export default Header;
