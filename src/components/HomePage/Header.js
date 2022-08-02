import { useNavigate } from "react-router-dom";
import UserButton from "./UserButton";
import LoginSignupButton from "./LoginSignupButtons";
import "./Header.css";

const Header = ({ isLoggedIn, initialUserState }) => {
  const navigate = useNavigate();

  return (
    <header className='login-signup-header'>
      <div className='space'></div>
      <button className='logo-title' onClick={() => navigate("../")}>
        <h1>TAKE ROOT</h1>
      </button>
      {isLoggedIn() ? (
        <UserButton initialUserState={initialUserState} />
      ) : (
        <LoginSignupButton />
      )}
    </header>
  );
};

export default Header;
