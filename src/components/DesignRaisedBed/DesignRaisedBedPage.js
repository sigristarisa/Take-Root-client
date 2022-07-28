import PlantLibrary from "./PlantLibrary";
import PreviewRaisedBed from "../CreateSquares/PreviewRaisedBed";
import "./DesignRaisedBedPage.css";

const DesignRaisedBedPage = () => {
  return (
    <main className='design-raisedbed-page-main'>
      <PreviewRaisedBed />
      <PlantLibrary />;
    </main>
  );
};

export default DesignRaisedBedPage;
