import UserButton from "./UserButton";
import LoginSignupButton from "./LoginSignupButtons";
import "./Header.css";

const Header = ({ isLoggedIn, initialUserState }) => {
  return (
    <header className='login-signup-header'>
      <div className='space'></div>
      <h1 className='logo'>TAKE ROOT</h1>
      {isLoggedIn() ? (
        <UserButton initialUserState={initialUserState} />
      ) : (
        <LoginSignupButton />
      )}
    </header>
  );
};

export default Header;
