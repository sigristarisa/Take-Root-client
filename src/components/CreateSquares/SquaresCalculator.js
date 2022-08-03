import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext, raisedBedContext } from "../../helpers/createContext";
import SizeDropDown from "./SizeDropDown";
import client from "../../helpers/client";
import shovel from "../../assets/shaberu.png";

const SquaresCalculator = ({ square, setSquare, setHeaderColor }) => {
  const { user } = useContext(userContext);
  const { setRaisedBed } = useContext(raisedBedContext);
  const navigate = useNavigate();

  const handleSquares = (e) => {
    const { name, value } = e.target;
    setSquare({ ...square, [name]: value });
  };

  const submitRaisedBed = (e) => {
    e.preventDefault();
    client.post("/raisedbed", { ...square, userId: user.id }).then((res) => {
      setRaisedBed(res.data);
      navigate("../design-raised-bed", { replace: true });
    });
  };

  const cancelCreateRaisedBed = () => {
    setHeaderColor("");
    navigate("../");
  };
  return (
    <aside className='calculator-container'>
      <section className='calculator-top-container'>
        <h1>Let's get started!</h1>
        <img src={shovel} alt='shovel icon' />
        <p>
          Choose the size that is the closest to your raised bed. <br />
          As we are working with the square-foot method, <br />
          one square will be around 30cm / 1foot.
        </p>
        <form onSubmit={submitRaisedBed}>
          <div className='drop-down-container'>
            <SizeDropDown
              label={"Length* "}
              name={"column"}
              onChange={handleSquares}
            />
            <SizeDropDown
              label={"Height* "}
              name={"row"}
              onChange={handleSquares}
            />
          </div>
          <div className='btn-container'>
            <button
              className='cancel-btn'
              onClick={() => cancelCreateRaisedBed()}
            >
              cancel
            </button>
            <input className='next-step-btn' type='submit' value='Next Step' />
          </div>
        </form>
      </section>
      <div className='space'></div>
    </aside>
  );
};

export default SquaresCalculator;
