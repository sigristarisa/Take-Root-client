import { useNavigate } from "react-router-dom";
const SignupHeader = () => {
  const navigate = useNavigate();
  return (
    <header className='login-signup-header'>
      <div></div>
      <h1 className='logo'>TAKE ROOT</h1>
      <div className='login-signup-btn-container'>
        <button
          className='login-btn'
          onClick={() => navigate("../login", { replace: true })}
        >
          Login
        </button>
        <button
          className='signup-btn'
          onClick={() => navigate("../signup", { replace: true })}
        >
          Register Now
        </button>
      </div>
    </header>
  );
};

export default SignupHeader;
