const PlantLibraryItem = ({ plant, index }) => {
  return (
    <li key={index} className='plant-library-list-item'>
      <img
        src={`http://localhost:4000${plant.image}`}
        alt={`${plant.name}`}
        draggable={true}
      />
      <p>{plant.name}</p>
    </li>
  );
};

export default PlantLibraryItem;
