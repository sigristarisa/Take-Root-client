import { useNavigate } from "react-router-dom";
const SignupHeader = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div>LOGO</div>
      <div className='login-signup-btn-container'>
        <button onClick={() => navigate("../login", { replace: true })}>
          Login
        </button>
        <button onClick={() => navigate("../signup", { replace: true })}>
          Register Now
        </button>
      </div>
    </header>
  );
};

export default SignupHeader;
