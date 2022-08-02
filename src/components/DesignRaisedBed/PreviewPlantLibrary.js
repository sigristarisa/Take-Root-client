import PlantLibrary from "./PlantLibrary";
import NameRaisedBed from "./NameRaisedBed";
import ButtonBar from "./ButtonBar";

const PreviewPlantLibrary = ({
  isSaved,
  editRaisedBed,
  squareId,
  setSquareId,
  isSet,
  saveRaisedBed,
}) => {
  return (
    <aside className='preview-plant-library-container'>
      <di className='plant-library-text'>
        <h1>Plant Library</h1>
        <p>
          Click a square and drag your plant of choice.
          <br />
          We will recommend you the matching companions <br />
          and what to avoid.
        </p>
      </di>
      {isSaved ? (
        <NameRaisedBed editRaisedBed={editRaisedBed} />
      ) : (
        <PlantLibrary
          squareId={squareId}
          isSet={isSet}
          saveRaisedBed={saveRaisedBed}
        />
      )}
      <ButtonBar saveRaisedBed={saveRaisedBed} setSquareId={setSquareId} />
    </aside>
  );
};

export default PreviewPlantLibrary;
