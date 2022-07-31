import { useContext } from "react";
import { raisedBedContext } from "../../helpers/createContext";
import SquareListItem from "./SquareListItem";

const DesignRaisedBed = ({ squareId, setSquareId }) => {
  const { raisedBed } = useContext(raisedBedContext);
  const raisedBedIsSet = () => {
    const raisedBedObj = Object.keys(raisedBed);
    return raisedBedObj.length ? true : false;
  };

  const getColumns = () => {
    let columns = 1;
    if (raisedBedIsSet()) {
      columns = {
        gridTemplateColumns: `repeat(${raisedBed.raisedBed.columns}, 1fr)`,
      };
    }
    return columns;
  };

  return (
    <div className='preview-container'>
      {raisedBedIsSet() && (
        <ul className='raised-bed-container' style={getColumns()}>
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
