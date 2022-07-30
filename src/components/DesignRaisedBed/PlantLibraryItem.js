import { useRef } from "react";

const PlantLibraryItem = ({ plant, index }) => {
  const dragPlant = useRef();

  const dragStart = (e, plantId) => {
    dragPlant.current = plantId;
    e.dataTransfer.setData("plantId", plantId);
  };
  return (
    <li key={index} className='plant-library-list-item'>
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
