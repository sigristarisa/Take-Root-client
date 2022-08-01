import { useRef } from "react";

const PlantLibraryItem = ({ plant, index, companionData }) => {
  const dragPlant = useRef();

  const dragStart = (e, plantId) => {
    dragPlant.current = plantId;
    e.dataTransfer.setData("plantId", plantId);
  };

  const isSet = (obj) => {
    const raisedBedObj = Object.keys(obj);
    return raisedBedObj.length ? true : false;
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

  return (
    <li
      key={index}
      className={`plant-library-list-item ${isCompanion(plant.id)}`}
    >
      <img
        src={`http://localhost:4000${plant.image}`}
        alt={`${plant.name}`}
        onDragStart={(e) => dragStart(e, plant.id)}
        draggable
      />
      <p>{plant.name}</p>
    </li>
  );
};

export default PlantLibraryItem;
