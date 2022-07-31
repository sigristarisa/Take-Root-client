import { useState } from "react";
import MainHeader from "../MainPage/MainHeader";
import DesignRaisedBed from "./DesignRaisedBed";
import PlantLibrary from "./PlantLibrary";
import "./DesignRaisedBedPage.css";

const DesignRaisedBedPage = () => {
  const [squareId, setSquareId] = useState(0);

  return (
    <div>
      <MainHeader />
      <main className='design-raisedbed-page-main'>
        <DesignRaisedBed squareId={squareId} setSquareId={setSquareId} />
        <PlantLibrary squareId={squareId} />
      </main>
    </div>
  );
};

export default DesignRaisedBedPage;
