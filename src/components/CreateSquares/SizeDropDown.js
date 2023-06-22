const SizeDropDown = ({ label, name, onChange }) => {
  return (
    <div className="container__size-dropdown">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        onChange={onChange}
        required
        className="size-dropdown">
        <option>...</option>
        <option value="1">~ 30cm / 1foot</option>
        <option value="2">~ 60cm / 2feet</option>
        <option value="3">~ 90cm / 3feet</option>
        <option value="4">~ 120cm / 4feet</option>
        <option value="5">~ 150cm / 5feet</option>
        <option value="6">~ 180cm / 6feet</option>
        <option value="7">~ 210cm / 7feet</option>
        <option value="8">~ 240cm / 8feet</option>
        <option value="9">~ 270cm / 9feet</option>
        <option value="10">~ 300cm / 10feet</option>
      </select>
    </div>
  );
};

export default SizeDropDown;
