const FormInput = ({ label, name, type, value, placeholder, handleChange }) => {
  return (
    <div className="container__form-input">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-input"
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
