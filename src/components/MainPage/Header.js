import { useContext } from "react";
import { userContext } from "../../helpers/createContext";
import UserButton from "./UserButton";
import LoginSignupButton from "./LoginSignupButtons";

const Header = ({ isLoggedIn, initialUserState }) => {
  const { user } = useContext(userContext);

  return (
    <header className='login-signup-header'>
      <div></div>
      <h1 className='logo'>TAKE ROOT</h1>
      {isLoggedIn(user) ? (
        <UserButton initialUserState={initialUserState} />
      ) : (
        <LoginSignupButton />
      )}
    </header>
  );
};

export default Header;
