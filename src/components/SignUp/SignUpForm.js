import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../helpers/createContext";
import client from "../../helpers/client";
import FormInput from "./FormInput";

const SignupForm = () => {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    client.post("/user/signup", user).then((res) => {
      localStorage.setItem("token", res.data.token);
      setUser(res.data);
      navigate("../home", { replace: true });
    });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Choose your username"}
          name={"userName"}
          type={"text"}
          value={user.userName}
          placeholder={"bunsenhoneydew"}
          handleUserData={handleUserData}
        />
        <FormInput
          label={"What is your Email address"}
          name={"email"}
          type={"email"}
          value={user.email}
          placeholder={"honeydew@melon.com"}
          handleUserData={handleUserData}
        />
        <FormInput
          label={"Choose your password"}
          name={"password"}
          type={"password"}
          value={user.password}
          placeholder={"Something safe!"}
          handleUserData={handleUserData}
        />
        <FormInput
          label={"Confirm password"}
          name={"confirmPassword"}
          type={"password"}
          value={user.confirmPassword}
          placeholder={"Are you sure?"}
          handleUserData={handleUserData}
        />
        <button onClick={() => navigate("../", { replace: true })}>
          No, register later
        </button>
        <input
          className='signup-submit-btn'
          type='submit'
          value='Register now'
        />
      </form>
    </main>
  );
};

export default SignupForm;
