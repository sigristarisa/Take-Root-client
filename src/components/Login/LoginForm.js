import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../helpers/userContext";
import client from "../../helpers/client";
import FormInput from "../Signup/FormInput";

const LoginForm = () => {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    client.post("/user/login", user).then((res) => {
      console.log("whats the response: ", res.data);
      localStorage.setItem("token", res.data.token);
      setUser(res.data);
      navigate("../home", { replace: true });
    });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email address"}
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
        <input className='signup-submit-btn' type='submit' value='Log In' />
      </form>
    </main>
  );
};

export default LoginForm;
