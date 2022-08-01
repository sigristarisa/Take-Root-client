import { useContext } from "react";
import client from "../../helpers/client";
import { raisedBedContext } from "../../helpers/createContext";

const ButtonBar = ({ saveRaisedBed }) => {
  const { raisedBed, setRaisedBed } = useContext(raisedBedContext);

  const deleteSquares = () => {
    client
      .patch(`/raisedBed/${raisedBed.raisedBed.id}`, "")
      .then((res) => setRaisedBed(res.data));
  };

  return (
    <div>
      <button onClick={() => deleteSquares()}>Delete All</button>
      <button onClick={() => saveRaisedBed()}>Save</button>
    </div>
  );
};

export default ButtonBar;
