import { useContext } from "react";
import { squareContext } from "../../helpers/createContext";

const PreviewRaisedBed = () => {
  const { square } = useContext(squareContext);

  const createSquares = () => {
    const rows = square.row;
    const columns = square.column;
    const squareNum = rows * columns;
    const squareArr = [];

    for (let i = 0; i < squareNum; i++) {
      squareArr.push("");
    }
    return squareArr;
  };

  const gridTemplateColumns = {
    gridTemplateColumns: `repeat(${square.column}, 1fr)`,
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
export default PreviewRaisedBed;
