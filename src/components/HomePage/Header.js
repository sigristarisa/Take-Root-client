import { useNavigate } from "react-router-dom";
import UserButton from "./UserButton";
import LoginSignupButton from "./LoginSignupButtons";
import "./Header.css";

const Header = ({
  isLoggedIn,
  initialUserState,
  headerColor,
  setHeaderColor,
}) => {
  const navigate = useNavigate();

  const changeHeaderNeutral = () => {
    setHeaderColor("");
    navigate("../");
  };

  return (
    <header className={`login-signup-header ${headerColor}`}>
      <div className='space'></div>
      <button
        className={`logo-title  ${headerColor}`}
        onClick={() => changeHeaderNeutral()}
      >
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
