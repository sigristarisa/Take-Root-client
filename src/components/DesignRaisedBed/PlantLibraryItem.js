import { useRef } from "react";

const PlantLibraryItem = ({ plant, key, companionData, isSet }) => {
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
    <li key={key} className="list-item__plant-library">
      <img
        className={`${isCompanion(plant.id)}`}
        src={`${process.env.REACT_APP_API_URL}${plant.image}`}
        alt={`${plant.name}`}
        onDragStart={(e) => dragStart(e, plant.id)}
        draggable
      />
      <div className="container__plant-text">
        <p>{plant.name}</p>
        <p className={`text__plant-${isCompanion(plant.id)}`}>
          {renderCompanionText(plant.id)}
        </p>
      </div>
    </li>
  );
};

export default PlantLibraryItem;
