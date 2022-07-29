import { useState } from "react";
import MainHeader from "../MainPage/MainHeader";
import PreviewRaisedBed from "./PreviewRaisedBed";
import SquaresCalculator from "./SquaresCalculator";
import "./CreateSquares.css";

const CreateSquaresPage = () => {
  const [square, setSquare] = useState({
    row: 0,
    column: 0,
  });

  return (
    <div>
      <MainHeader />
      <main className='create-squares-page-main'>
        <PreviewRaisedBed square={square} />
        <SquaresCalculator square={square} setSquare={setSquare} />
      </main>
    </div>
  );
};
export default CreateSquaresPage;
