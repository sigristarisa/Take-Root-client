import { useState, useEffect } from "react";
import PlantLibraryItem from "./PlantLibraryItem";
import client from "../../helpers/client";

const PlantLibrary = ({ squareId }) => {
  const [plants, setPlants] = useState([]);
  const [companionData, setCompanionData] = useState({});

  useEffect(() => {
    client.get("/plant").then((res) => {
      setPlants(res.data.plants);
    });
  });

  useEffect(() => {
    if (squareId) {
      client
        .get(`/square/companion/${squareId}`)
        .then((res) => setCompanionData(res.data));
    }
  }, [squareId]);

  return (
    <ul className='plant-library-list'>
      {plants.map((plant, index) => (
        <PlantLibraryItem
          plant={plant}
          index={index}
          companionData={companionData}
        />
      ))}
    </ul>
  );
};

export default PlantLibrary;
