import { useState, useEffect, useContext } from "react";
import client from "../../helpers/client";
import { userContext } from "../../helpers/createContext";
import RaisedBedGalleryItem from "./RaisedBedGalleryItem";

const RaisedBedGalleryPage = () => {
  const { user } = useContext(userContext);
  const [inspirations, setInspirations] = useState([]);

  useEffect(() => {
    client
      .get(`/raisedbed/inspiration/${user.id}`)
      .then((res) => setInspirations(res.data.raisedBeds));
  }, []);

  return (
    <main className='view-raisedbed-main'>
      <h1>Inspirations</h1>
      <div>
        <ul className='view-raisedbed-list'>
          {inspirations.map((inspiration, index) => (
            <RaisedBedGalleryItem inspiration={inspiration} index={index} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default RaisedBedGalleryPage;
