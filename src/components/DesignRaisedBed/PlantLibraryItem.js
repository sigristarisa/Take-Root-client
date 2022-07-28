import { useDrag } from "react-dnd";

const PlantLibraryItem = ({ plant, index }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "plant",
    item: { id: plant.id, name: plant.name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <li key={index} className='plant-library-list-item' ref={dragRef}>
      <img src={`http://localhost:4000${plant.image}`} alt={`${plant.name}`} />
      <p>{plant.name}</p>
    </li>
  );
};

export default PlantLibraryItem;
