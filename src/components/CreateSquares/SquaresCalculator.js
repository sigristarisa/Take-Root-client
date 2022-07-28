import { useContext } from "react";
import { userContext, squareContext } from "../../helpers/createContext";
import SizeDropDown from "./SizeDropDown";
import client from "../../helpers/client";

const SquaresCalculator = () => {
  const { user } = useContext(userContext);
  const { square, setSquare } = useContext(squareContext);

  const handleSquares = (e) => {
    const { name, value } = e.target;
    setSquare({ ...square, [name]: value });
  };

  console.log("squares: ", square);

  const submitRaisedBed = (e) => {
    e.preventDefault();
    client
      .post("/raisedbed", { ...square, userId: user.id })
      .then((res) => console.log("response: ", res.data));
  };

  return (
    <section className='calculator-container'>
      <h1>Let's get started!</h1>
      <p>
        Choose the size that is the closest to your raised bed. As we are
        working with the companion method, one square will be around 30cm/1foot.{" "}
      </p>
      <form onSubmit={submitRaisedBed}>
        <SizeDropDown
          label={"Length: "}
          name={"column"}
          onChange={handleSquares}
        />
        <SizeDropDown
          label={"Height: "}
          name={"row"}
          onChange={handleSquares}
        />
        <input type='submit' value='Next Step' />
      </form>
    </section>
  );
};

export default SquaresCalculator;
