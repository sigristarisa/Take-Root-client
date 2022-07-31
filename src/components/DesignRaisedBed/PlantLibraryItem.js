import { useRef } from "react";

const PlantLibraryItem = ({ plant, index, companions }) => {
  const dragPlant = useRef();

  const dragStart = (e, plantId) => {
    dragPlant.current = plantId;
    e.dataTransfer.setData("plantId", plantId);
  };

  const isCompanion = (plantId) => {
    let className = "";
    for (const companion of companions) {
      if (plantId === companion.companionId) className = "companion";
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
