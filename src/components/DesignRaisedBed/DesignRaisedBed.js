import { useContext } from "react";
import { raisedBedContext } from "../../helpers/createContext";

const DesignRaisedBed = () => {
  const { raisedBed } = useContext(raisedBedContext);

  const raisedBedIsSet = () => {
    const raisedBedObj = Object.keys(raisedBed);
    return raisedBedObj.length ? true : false;
  };

  const gridTemplateColumns = {
    gridTemplateColumns: `repeat(3, 1fr)`,
  };

  return (
    <div className='preview-container'>
      {raisedBedIsSet() && (
        <ul className='raised-bed-container' style={gridTemplateColumns}>
          {raisedBed.data.newSquares.map((square, index) => (
            <li key={index} className='square-container'>
              {square.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DesignRaisedBed;
