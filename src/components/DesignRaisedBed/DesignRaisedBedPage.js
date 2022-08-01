import { useState } from "react";
import MainHeader from "../MainPage/MainHeader";
import DesignRaisedBed from "./DesignRaisedBed";
import PlantLibrary from "./PlantLibrary";
import NameRaisedBed from "./NameRaisedBed";
import "./DesignRaisedBedPage.css";

const DesignRaisedBedPage = () => {
  const [squareId, setSquareId] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [notClickable, setNotClickable] = useState("");
  const isSet = (obj) => {
    const dataObj = Object.keys(obj);
    return dataObj.length ? true : false;
  };

  const saveRaisedBed = () => {
    setIsSaved(true);
    setNotClickable("saved");
  };

  const editRaisedBed = () => {
    setIsSaved(false);
    setNotClickable("");
  };

  return (
    <div>
      <MainHeader />
      <main className='design-raisedbed-page-main'>
        <DesignRaisedBed
          squareId={squareId}
          setSquareId={setSquareId}
          isSet={isSet}
          notClickable={notClickable}
        />
        {isSaved ? (
          <NameRaisedBed editRaisedBed={editRaisedBed} />
        ) : (
          <PlantLibrary
            squareId={squareId}
            isSet={isSet}
            saveRaisedBed={saveRaisedBed}
          />
        )}
      </main>
    </div>
  );
};

export default DesignRaisedBedPage;
