import { useContext } from "react";
import { raisedBedContext } from "../../helpers/createContext";
import SquareListItem from "./SquareListItem";

const DesignRaisedBed = ({ squareId, setSquareId, isSet, notClickable }) => {
  const { raisedBed } = useContext(raisedBedContext);

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
    <aside className="container__preview">
      {isSet(raisedBed) && (
        <ul
          className={`container__raised-bed ${notClickable}`}
          style={getColumns(raisedBed)}>
          {raisedBed.raisedBed.square.map((square, index) => (
            <SquareListItem
              square={square}
              index={index}
              squareId={squareId}
              setSquareId={setSquareId}
              columns={raisedBed.raisedBed.columns}
              rows={raisedBed.raisedBed.rows}
            />
          ))}
        </ul>
      )}
    </aside>
  );
};
export default DesignRaisedBed;
