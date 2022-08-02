import { useState } from "react";
import PreviewRaisedBed from "./PreviewRaisedBed";
import SquaresCalculator from "./SquaresCalculator";
import "./CreateSquares.css";

const CreateSquaresPage = ({ setHeaderColor }) => {
  const [square, setSquare] = useState({
    row: 0,
    column: 0,
  });

  return (
    <div>
      <main className='create-squares-page-main'>
        <PreviewRaisedBed square={square} />
        <SquaresCalculator
          square={square}
          setSquare={setSquare}
          setHeaderColor={setHeaderColor}
        />
      </main>
    </div>
  );
};
export default CreateSquaresPage;
