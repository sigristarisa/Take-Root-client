import { useContext } from "react";
import { userContext } from "../../helpers/userContext";
import client from "../../helpers/client";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignUpForm = () => {
  const { user, setUser } = useContext(userContext);

  const handleUserData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    client.post("/user/signup", user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className='signup-form-input'
        label='User Name'
        variant='outlined'
        name='userName'
        onChange={handleUserData}
      />
      <TextField
        className='signup-form-input'
        label='Email Address'
        variant='outlined'
        name='email'
        type='email'
        onChange={handleUserData}
      />
      <TextField
        className='signup-form-input'
        label='Password'
        variant='outlined'
        name='password'
        type='password'
        onChange={handleUserData}
      />
      <TextField
        className='signup-form-input'
        label='Confirm Password'
        variant='outlined'
        name='confirmPassword'
        type='password'
        onChange={handleUserData}
      />
      <Button id='signup-submit-button' type='submit' variant='contained'>
        Submit
      </Button>
    </form>
  );
};

export default SignUpForm;
