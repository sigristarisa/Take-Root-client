import { useState } from "react";
import DesignRaisedBed from "./DesignRaisedBed";
import PreviewPlantLibrary from "./PreviewPlantLibrary";
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
    <main className='design-raisedbed-page-main'>
      <DesignRaisedBed
        squareId={squareId}
        setSquareId={setSquareId}
        isSet={isSet}
        notClickable={notClickable}
      />
      <PreviewPlantLibrary
        isSaved={isSaved}
        editRaisedBed={editRaisedBed}
        squareId={squareId}
        setSquareId={setSquareId}
        isSet={isSet}
        saveRaisedBed={saveRaisedBed}
      />
    </main>
  );
};

export default DesignRaisedBedPage;
