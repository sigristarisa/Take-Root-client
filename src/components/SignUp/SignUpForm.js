import { useContext } from "react";
import { userContext } from "../../helpers/userContext";
import client from "../../helpers/client";
import SignupFormInput from "./SignupFormInput";

const SignupForm = () => {
  const { user, setUser } = useContext(userContext);

  const handleUserData = (e) => {
    const { name, value } = e.target;
    console.log("value", user);
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    client
      .post("/user/signup", user)
      .then((res) => console.log("whats this", res.data));
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <SignupFormInput
          name={"userName"}
          type={"text"}
          value={user.userName}
          handleUserData={handleUserData}
        />
        <SignupFormInput
          name={"email"}
          type={"email"}
          value={user.email}
          handleUserData={handleUserData}
        />
        <SignupFormInput
          name={"password"}
          type={"password"}
          value={user.password}
          handleUserData={handleUserData}
        />
        <SignupFormInput
          name={"confirmPassword"}
          type={"password"}
          value={user.confirmPassword}
          handleUserData={handleUserData}
        />
        <input className='signup-submit-btn' type='submit' />
      </form>
    </main>
  );
};

export default SignupForm;
