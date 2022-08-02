import { useRef } from "react";

const PlantLibraryItem = ({ plant, index, companionData, isSet }) => {
  const dragPlant = useRef();

  const dragStart = (e, plantId) => {
    dragPlant.current = plantId;
    e.dataTransfer.setData("plantId", plantId);
  };

  const isCompanion = (plantId) => {
    let className = "";
    if (isSet(companionData)) {
      const { companions, nonCompanions } = companionData;
      for (const companion of companions) {
        if (plantId === companion.companionId) className = "companion";
      }
      for (const nonCompanion of nonCompanions) {
        if (plantId === nonCompanion.nonCompanionId)
          className = "non-companion";
      }
    }
    return className;
  };

  const renderCompanionText = (plantId) => {
    if (isCompanion(plantId) === "companion") return "Companion";
    if (isCompanion(plantId) === "non-companion") return "Avoid";
    return "";
  };

  return (
    <li key={index} className='plant-library-list-item'>
      <img
        className={`${isCompanion(plant.id)}`}
        src={`http://localhost:4000${plant.image}`}
        alt={`${plant.name}`}
        onDragStart={(e) => dragStart(e, plant.id)}
        draggable
      />
      <div className='plant-text-container'>
        <p>{plant.name}</p>
        <p className={`plant-${isCompanion(plant.id)}text`}>
          {renderCompanionText(plant.id)}
        </p>
      </div>
    </li>
  );
};

export default PlantLibraryItem;
