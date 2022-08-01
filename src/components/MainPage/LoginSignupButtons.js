import { useNavigate } from "react-router-dom";

const LoginSignupButtons = () => {
  const navigate = useNavigate();

  return (
    <div className='login-signup-btn-container'>
      <button onClick={() => navigate("../login", { replace: true })}>
        Login
      </button>
      <button onClick={() => navigate("../signup", { replace: true })}>
        Register Now
      </button>
    </div>
  );
};

export default LoginSignupButtons;
