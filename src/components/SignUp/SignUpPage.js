import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../helpers/createContext";
import client from "../../helpers/client";
import FormInput from "./FormInput";
import "./Signup.css";

const SignupPage = () => {
  const { user, setUser } = useContext(userContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    client
      .post("/user/signup", user, false)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("token", res.data.token);
        console.log("hello", res.data);
        setUser(res.data);

        // navigate("../", { replace: true });
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  return (
    <main className="main__signup-login">
      <form className="form__signup" onSubmit={handleSubmit}>
        <h1>Register</h1>
        {error && <div>{error}</div>}
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
        <div className="container__signup-btn">
          <button
            className="btn__signup-later"
            type="button"
            onClick={() => navigate("../login", { replace: true })}>
            Or login
          </button>
          <input
            className="btn__signup-submit"
            type="submit"
            value="Register now"
          />
        </div>
      </form>
    </main>
  );
};

export default SignupPage;
