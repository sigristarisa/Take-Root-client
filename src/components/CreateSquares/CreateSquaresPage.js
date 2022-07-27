import MainHeader from "../MainPage/MainHeader";
import PreviewRaisedBed from "./PreviewRaisedBed";
import SquaresCalculator from "./SquaresCalculator";
import "./CreateSquares.css";

const CreateSquaresPage = () => {
  return (
    <div>
      <MainHeader />
      <main className='create-squares-page-main'>
        <PreviewRaisedBed />
        <SquaresCalculator />
      </main>
    </div>
  );
};
export default CreateSquaresPage;
