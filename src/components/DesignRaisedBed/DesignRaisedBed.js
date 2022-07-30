import { useContext, useState } from "react";
import { raisedBedContext } from "../../helpers/createContext";
import client from "../../helpers/client";

const DesignRaisedBed = () => {
  const { raisedBed } = useContext(raisedBedContext);
  const [squareId, setSquareId] = useState(0);

  const getSquareId = (squareId) => {
    console.log("am I getting this?: ", squareId);
    setSquareId(squareId);
  };

  const drop = (e) => {
    const plantId = e.dataTransfer.getData("plantId");
    const idObj = { squareId: Number(squareId), plantId: Number(plantId) };
    client
      .patch("/square", idObj)
      .then((res) => console.log("what's the response: ", res.data));
  };

  const raisedBedIsSet = () => {
    const raisedBedObj = Object.keys(raisedBed);
    return raisedBedObj.length ? true : false;
  };

  const getColumns = () => {
    let columns = 1;
    if (raisedBedIsSet()) {
      columns = {
        gridTemplateColumns: `repeat(${raisedBed.data.newRaisedBed.columns}, 1fr)`,
      };
    }
    return columns;
  };

  return (
    <div className='preview-container'>
      {raisedBedIsSet() && (
        <ul className='raised-bed-container' style={getColumns()}>
          {raisedBed.data.newSquares.map((square, index) => (
            <li
              key={index}
              className='square-container'
              onClick={() => getSquareId(square.id)}
              onDrop={(e) => drop(e)}
              onDragOver={(e) => e.preventDefault()}
            >
              {square.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DesignRaisedBed;
