import { useState } from "react";
import MainHeader from "../MainPage/MainHeader";
import DesignRaisedBed from "./DesignRaisedBed";
import PlantLibrary from "./PlantLibrary";
import "./DesignRaisedBedPage.css";

const DesignRaisedBedPage = () => {
  const [squareId, setSquareId] = useState(0);
  const isSet = (obj) => {
    const dataObj = Object.keys(obj);
    return dataObj.length ? true : false;
  };

  return (
    <div>
      <MainHeader />
      <main className='design-raisedbed-page-main'>
        <DesignRaisedBed
          squareId={squareId}
          setSquareId={setSquareId}
          isSet={isSet}
        />
        <PlantLibrary squareId={squareId} isSet={isSet} />
      </main>
    </div>
  );
};

export default DesignRaisedBedPage;
