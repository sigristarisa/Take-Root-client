import { useContext } from "react";
import { raisedBedContext } from "../../helpers/createContext";

const PreviewRaisedBed = ({ square, squareFixed }) => {
  const { raisedBed } = useContext(raisedBedContext);

  const previewSquares = () => {
    const rows = square.row;
    const columns = square.column;
    const squareNum = rows * columns;
    const squareArr = [];

    for (let i = 0; i < squareNum; i++) {
      squareArr.push("");
    }
    return squareArr;
  };

  const raisedBedIsSet = () => {
    const raisedBedObj = Object.keys(raisedBed);
    return raisedBedObj.length ? true : false;
  };

  const changeSquares = () => {
    let renderingSquare = previewSquares();
    if (raisedBedIsSet()) {
      renderingSquare = raisedBed.data.newSquares;
    }
    return renderingSquare;
  };

  const gridTemplateColumns = {
    gridTemplateColumns: `repeat(${square.column}, 1fr)`,
  };

  return (
    <div className='preview-container'>
      <ul className='raised-bed-container' style={gridTemplateColumns}>
        {changeSquares().map((square, index) => (
          <li key={index} className='square-container'>
            {square.id}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PreviewRaisedBed;
