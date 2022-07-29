import { useState } from "react";
import MainHeader from "../MainPage/MainHeader";
import PreviewRaisedBed from "./PreviewRaisedBed";
import SquaresCalculator from "./SquaresCalculator";
import PlantLibrary from "./PlantLibrary";
import "./CreateSquares.css";

const CreateSquaresPage = () => {
  const [square, setSquare] = useState({
    row: 0,
    column: 0,
  });

  const [squareFixed, setSquareFixed] = useState(false);

  return (
    <div>
      <MainHeader />
      <main className='create-squares-page-main'>
        <PreviewRaisedBed square={square} />
        {!squareFixed ? (
          <SquaresCalculator
            square={square}
            setSquare={setSquare}
            setSquareFixed={setSquareFixed}
          />
        ) : (
          <PlantLibrary />
        )}
      </main>
    </div>
  );
};
export default CreateSquaresPage;
