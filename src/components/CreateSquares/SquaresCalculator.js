import { useState, useContext } from "react";
import { squareContext } from "../../helpers/createContext";
const SquaresCalculator = () => {
  const { square, setSquare } = useContext(squareContext);
  const [size, setSize] = useState({ length: 0, height: 0, unit: "" });

  const calculateSquares = (length, height, unit) => {
    let row;
    let column;
    if (unit === "cm") {
      row = Math.floor(height / 30);
      column = Math.floor(length / 30);
    }
    if (unit === "feet") {
      row = Math.floor(height);
      column = Math.floor(length);
    }
    setSquare({ row, column });
  };

  const handleSize = async (e) => {
    const { name, value } = e.target;
    setSize({ ...size, [name]: value });
  };

  const submitSize = (e) => {
    e.preventDefault();
    calculateSquares(size.length, size.height, size.unit);
  };

  console.log("what's the square: ", square);

  return (
    <section>
      <h1>Let's get started!</h1>
      <p>
        Choose the size that is the closest to your raised bed. As we are
        working with the companion method, one square will be around 30cm/1foot.{" "}
      </p>
      <label htmlFor='length'>Length</label>
      <form onSubmit={submitSize}>
        <input
          id='length'
          name='length'
          type='number'
          value={size.length}
          onChange={handleSize}
        />
        <label htmlFor='height'>Height</label>
        <input
          id='height'
          name='height'
          type='number'
          value={size.height}
          onChange={handleSize}
        />
        <select name='unit' onChange={handleSize}>
          <option>...</option>
          <option value='cm'>cm</option>
          <option value='feet'>feet</option>
        </select>
        <input type='submit' />
      </form>
    </section>
  );
};

export default SquaresCalculator;
