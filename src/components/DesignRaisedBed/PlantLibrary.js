import { useState, useEffect } from "react";
import PlantLibraryItem from "./PlantLibraryItem";
import ButtonBar from "./ButtonBar";
import client from "../../helpers/client";

const PlantLibrary = ({ squareId, isSet }) => {
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
    <aside>
      <ul className='plant-library-list'>
        {plants.map((plant, index) => (
          <PlantLibraryItem
            plant={plant}
            index={index}
            companionData={companionData}
            isSet={isSet}
          />
        ))}
      </ul>
      <ButtonBar />
    </aside>
  );
};

export default PlantLibrary;
