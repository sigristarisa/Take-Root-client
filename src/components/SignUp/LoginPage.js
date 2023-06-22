import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../helpers/createContext";
import client from "../../helpers/client";
import FormInput from "./FormInput";
import "./Signup.css";

const LoginPage = () => {
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
    <main className="main__signup-login">
      <form onSubmit={handleSubmit} className="form__login">
        <h1>Login</h1>
        <FormInput
          label={"Email address*"}
          name={"email"}
          type={"email"}
          value={user.email}
          placeholder={"honeydew@melon.com"}
          handleChange={handleUserData}
        />
        <FormInput
          label={"Password*"}
          name={"password"}
          type={"password"}
          value={user.password}
          placeholder={"Enter your password"}
          handleChange={handleUserData}
        />
        <div className="container__signup-btn">
          <button
            type="button"
            className="btn__signup-later"
            onClick={() => navigate("../signup", { replace: true })}>
            Or signup
          </button>
          <input className="btn__signup-submit" type="submit" value="Login" />
        </div>
      </form>
    </main>
  );
};

export default LoginPage;
