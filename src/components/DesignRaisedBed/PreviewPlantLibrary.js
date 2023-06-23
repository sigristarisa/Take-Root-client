import PlantLibrary from "./PlantLibrary";
import ButtonBar from "./ButtonBar";
import shovel from "../../assets/shaberu.png";

const PreviewPlantLibrary = ({
  squareId,
  setSquareId,
  isSet,
  saveRaisedBed,
}) => {
  return (
    <aside className="container__plant-library">
      <div className="container__plant-library-text">
        <h1>Plant Library</h1>
        <img src={shovel} alt="shovel icon" />
        <p>
          Click a square and drag your plant of choice.
          <br />
          We will recommend you the matching companions <br />
          and what to avoid.
        </p>
      </div>
      <PlantLibrary
        squareId={squareId}
        isSet={isSet}
        saveRaisedBed={saveRaisedBed}
      />

      <ButtonBar saveRaisedBed={saveRaisedBed} setSquareId={setSquareId} />
    </aside>
  );
};

export default PreviewPlantLibrary;
