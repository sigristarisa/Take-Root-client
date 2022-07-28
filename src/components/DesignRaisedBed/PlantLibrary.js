import { useState } from "react";
import client from "../../helpers/client";

const PlantLibrary = () => {
  const [plants, setPlants] = useState([]);

  client.get("/plant").then((res) => {
    setPlants(res.data.plants);
  });

  return (
    <ul className='plant-library-list'>
      {plants.map((plant, index) => (
        <li key={index} className='plant-library-list-item'>
          <img
            src={`http://localhost:4000${plant.image}`}
            alt={`${plant.name}`}
          />
          <p>{plant.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default PlantLibrary;
