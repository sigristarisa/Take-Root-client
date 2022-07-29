import { useContext } from "react";
import { raisedBedContext } from "../../helpers/createContext";
// import client from "../../helpers/client";

const DesignRaisedBed = async () => {
  const { raisedBed } = useContext(raisedBedContext);
  const rows = raisedBed.data.newRaisedBed.rows;
  const columns = raisedBed.data.newRaisedBed.columns;

  const createSquares = () => {
    const squareNum = rows * columns;
    const squareArr = [];
    for (let i = 0; i < squareNum; i++) {
      squareArr.push("");
    }
    return squareArr;
  };

  const gridTemplateColumns = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  return (
    <div className='preview-container'>
      <ul className='raised-bed-container' style={gridTemplateColumns}>
        {createSquares().map((square, index) => (
          <li key={index} className='square-container'>
            square
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesignRaisedBed;
