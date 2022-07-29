import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext, raisedBedContext } from "../../helpers/createContext";
import SizeDropDown from "./SizeDropDown";
import client from "../../helpers/client";

const SquaresCalculator = ({ square, setSquare }) => {
  const { user } = useContext(userContext);
  const { setRaisedBed } = useContext(raisedBedContext);

  const navigate = useNavigate();

  const handleSquares = (e) => {
    const { name, value } = e.target;
    setSquare({ ...square, [name]: value });
  };

  const submitRaisedBed = (e) => {
    e.preventDefault();
    client
      .post("/raisedbed", { ...square, userId: user.id })
      .then((res) => {
        setRaisedBed(res.data);
      })
      .then(navigate("../design-raised-bed", { replace: true }));
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
