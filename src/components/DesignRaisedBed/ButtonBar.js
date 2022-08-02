import { useContext } from "react";
import client from "../../helpers/client";
import { raisedBedContext } from "../../helpers/createContext";

const ButtonBar = ({ saveRaisedBed, setSquareId }) => {
  const { raisedBed, setRaisedBed } = useContext(raisedBedContext);

  const deleteSquares = () => {
    setSquareId(0);
    client
      .patch(`/raisedBed/${raisedBed.raisedBed.id}`, "")
      .then((res) => setRaisedBed(res.data));
  };

  return (
    <div className='plant-btn-container'>
      <button className='clear-square-btn' onClick={() => deleteSquares()}>
        Clear all squares
      </button>
      <button className='save-btn' onClick={() => saveRaisedBed()}>
        Save
      </button>
    </div>
  );
};

export default ButtonBar;
