import { useContext } from "react";
import { raisedBedContext } from "../../helpers/createContext";

const PreviewRaisedBed = ({ square }) => {
  const { raisedBed } = useContext(raisedBedContext);
  const gridTemplateColumns = {
    gridTemplateColumns: `repeat(${square.column}, 1fr)`,
  };

  const squaresArr = raisedBed.data.newSquares;
  return (
    <div className='preview-container'>
      <ul className='raised-bed-container' style={gridTemplateColumns}>
        {squaresArr.map((square, index) => (
          <li key={index} className='square-container'>
            {square.id}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PreviewRaisedBed;
