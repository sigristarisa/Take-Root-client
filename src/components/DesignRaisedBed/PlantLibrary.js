import { useState } from "react";
import PlantLibraryItem from "./PlantLibraryItem";
import client from "../../helpers/client";

const PlantLibrary = () => {
  const [plants, setPlants] = useState([]);

  client.get("/plant").then((res) => {
    setPlants(res.data.plants);
  });

  return (
    <ul className='plant-library-list'>
      {plants.map((plant, index) => (
        <PlantLibraryItem plant={plant} index={index} />
      ))}
    </ul>
  );
};

export default PlantLibrary;
