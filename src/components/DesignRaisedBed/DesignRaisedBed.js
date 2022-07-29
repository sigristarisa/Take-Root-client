import { useContext, useRef } from "react";
import { raisedBedContext } from "../../helpers/createContext";

const DesignRaisedBed = () => {
  const { raisedBed } = useContext(raisedBedContext);
  const square = useRef();

  const dragEnter = (e, squareId) => {
    square.current = squareId;
    e.dataTransfer.setData("squareId", squareId);
    console.log("squareId", squareId);
  };

  const drop = (e) => {
    const plantId = e.dataTransfer.getData("plantId");
    console.log("plantId", Number(plantId));
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
              onDragEnter={(e) => dragEnter(e, index)}
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
