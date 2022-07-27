const FormInput = ({
  label,
  name,
  type,
  value,
  placeholder,
  handleUserData,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        className='signup-form-input'
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleUserData}
      />
    </div>
  );
};

export default FormInput;
