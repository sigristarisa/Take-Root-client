import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../helpers/createContext";
import client from "../../helpers/client";
import FormInput from "./FormInput";
import "./Signup.css";

const SignupForm = () => {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    client.post("/user/signup", user, false).then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("token", res.data.token);
      setUser(res.data);
      navigate("../", { replace: true });
    });
  };

  return (
    <main className='signup-login-main'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h1>Register</h1>
        <FormInput
          label={"Choose your username*"}
          name={"userName"}
          type={"text"}
          value={user.userName}
          placeholder={"bunsenhoneydew"}
          handleChange={handleUserData}
        />
        <FormInput
          label={"What is your Email address*"}
          name={"email"}
          type={"email"}
          value={user.email}
          placeholder={"honeydew@melon.com"}
          handleChange={handleUserData}
        />
        <FormInput
          label={"Choose your password*"}
          name={"password"}
          type={"password"}
          value={user.password}
          placeholder={"Something safe!"}
          handleChange={handleUserData}
        />
        <FormInput
          label={"Confirm password*"}
          name={"confirmPassword"}
          type={"password"}
          value={user.confirmPassword}
          placeholder={"Are you sure?"}
          handleChange={handleUserData}
        />
        <div className='signup-btn-container'>
          <button
            className='signup-later-btn'
            onClick={() => navigate("../login", { replace: true })}
          >
            Or login
          </button>
          <input
            className='signup-submit-btn'
            type='submit'
            value='Register now'
          />
        </div>
      </form>
    </main>
  );
};

export default SignupForm;
