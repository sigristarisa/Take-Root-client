import { useNavigate } from "react-router-dom";

const LoginSignupButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="container__login-signup-btn">
      <button
        className="btn__login"
        onClick={() => navigate("../login", { replace: true })}>
        Login
      </button>
      <button
        className="btn__signup"
        onClick={() => navigate("../signup", { replace: true })}>
        Register Now
      </button>
    </div>
  );
};

export default LoginSignupButtons;
