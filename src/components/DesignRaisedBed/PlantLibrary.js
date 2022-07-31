import { useState, useEffect } from "react";
import PlantLibraryItem from "./PlantLibraryItem";
import client from "../../helpers/client";

const PlantLibrary = ({ squareId }) => {
  const [plants, setPlants] = useState([]);
  const [companions, setCompanions] = useState([]);

  useEffect(() => {
    client.get("/plant").then((res) => {
      setPlants(res.data.plants);
    });
  });

  useEffect(() => {
    if (squareId) {
      client
        .get(`/square/companion/${squareId}`)
        .then((res) => setCompanions(res.data.companions));
    }
  }, [squareId]);

  return (
    <ul className='plant-library-list'>
      {plants.map((plant, index) => (
        <PlantLibraryItem plant={plant} index={index} companions={companions} />
      ))}
    </ul>
  );
};

export default PlantLibrary;
