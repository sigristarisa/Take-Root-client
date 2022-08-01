import { useContext } from "react";
import { raisedBedContext } from "../../helpers/createContext";
import SquareListItem from "./SquareListItem";

const DesignRaisedBed = ({ squareId, setSquareId }) => {
  const { raisedBed } = useContext(raisedBedContext);
  const isSet = (obj) => {
    const raisedBedObj = Object.keys(obj);
    return raisedBedObj.length ? true : false;
  };

  const getColumns = (raisedBed) => {
    let columns = 1;
    if (isSet(raisedBed)) {
      columns = {
        gridTemplateColumns: `repeat(${raisedBed.raisedBed.columns}, 1fr)`,
      };
    }
    return columns;
  };

  return (
    <div className='preview-container'>
      {isSet(raisedBed) && (
        <ul className='raised-bed-container' style={getColumns(raisedBed)}>
          {raisedBed.raisedBed.square.map((square, index) => (
            <SquareListItem
              square={square}
              index={index}
              squareId={squareId}
              setSquareId={setSquareId}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
export default DesignRaisedBed;
