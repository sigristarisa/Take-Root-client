import MainHeader from "../MainPage/MainHeader";
import DesignRaisedBed from "./DesignRaisedBed";
import PlantLibrary from "./PlantLibrary";
import "./DesignRaisedBedPage.css";

const DesignRaisedBedPage = () => {
  return (
    <div>
      <MainHeader />
      <main className='design-raisedbed-page-main'>
        <DesignRaisedBed />
        <PlantLibrary />
      </main>
    </div>
  );
};

export default DesignRaisedBedPage;
