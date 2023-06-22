import { useNavigate } from "react-router-dom";

const LoginSignupButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="container__login-signup-btn">
      <button
        className="login-btn"
        onClick={() => navigate("../login", { replace: true })}>
        Login
      </button>
      <button
        className="signup-btn"
        onClick={() => navigate("../signup", { replace: true })}>
        Register Now
      </button>
    </div>
  );
};

export default LoginSignupButtons;
