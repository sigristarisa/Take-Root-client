import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../helpers/createContext";
import client from "../../helpers/client";
import FormInput from "./FormInput";

const LoginForm = () => {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    client.post("/user/login", user, false).then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.setItem("token", res.data.token);
      setUser(res.data);
      navigate("../", { replace: true });
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
          handleChange={handleUserData}
        />
        <FormInput
          label={"Choose your password"}
          name={"password"}
          type={"password"}
          value={user.password}
          placeholder={"Something safe!"}
          handleChange={handleUserData}
        />
        <button onClick={() => navigate("../", { replace: true })}>
          No, login later
        </button>
        <input className='signup-submit-btn' type='submit' value='Login' />
      </form>
    </main>
  );
};

export default LoginForm;
