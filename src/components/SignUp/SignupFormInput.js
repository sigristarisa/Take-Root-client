const SignupFormInput = ({ name, type, value, handleUserData }) => {
  return (
    <input
      className='signup-form-input'
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={handleUserData}
    />
  );
};

export default SignupFormInput;
