import { useState } from "react";
import DesignRaisedBed from "./DesignRaisedBed";
import PreviewPlantLibrary from "./PreviewPlantLibrary";
import NameRaisedBed from "./NameRaisedBed";
import "./DesignRaisedBedPage.css";

const DesignRaisedBedPage = ({ setHeaderColor }) => {
  const [squareId, setSquareId] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [notClickable, setNotClickable] = useState("");
  const isSet = (obj) => {
    const dataObj = Object.keys(obj);
    return dataObj.length ? true : false;
  };

  const saveRaisedBed = () => {
    setIsSaved(true);
    setNotClickable("saved");
    setSquareId(0);
    setIsSubmitted(false);
  };

  const editRaisedBed = () => {
    setIsSaved(false);
    setNotClickable("");
  };

  return (
    <main className="main__design-raised-bed">
      {isSubmitted && (
        <div className="saved-container">
          <h1>Saved!</h1>
          <div className="saved-container-background"></div>
        </div>
      )}
      <DesignRaisedBed
        squareId={squareId}
        setSquareId={setSquareId}
        isSet={isSet}
        notClickable={notClickable}
      />
      {isSaved ? (
        <NameRaisedBed
          editRaisedBed={editRaisedBed}
          setIsSubmitted={setIsSubmitted}
          setHeaderColor={setHeaderColor}
        />
      ) : (
        <PreviewPlantLibrary
          isSaved={isSaved}
          editRaisedBed={editRaisedBed}
          squareId={squareId}
          setSquareId={setSquareId}
          isSet={isSet}
          saveRaisedBed={saveRaisedBed}
        />
      )}
    </main>
  );
};

export default DesignRaisedBedPage;
