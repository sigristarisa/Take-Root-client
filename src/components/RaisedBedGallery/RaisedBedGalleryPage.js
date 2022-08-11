import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../helpers/client";
import { userContext } from "../../helpers/createContext";
import RaisedBedGalleryItem from "./RaisedBedGalleryItem";
import telescope from "../../assets/telescope.png";

const RaisedBedGalleryPage = () => {
  const { user } = useContext(userContext);
  const [inspirations, setInspirations] = useState([]);
  const navigate = useNavigate();

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
            <RaisedBedGalleryItem inspiration={inspiration} key={index} />
          ))}
        </ul>
      </div>
      <div
        className='get-inspiration-container'
        onClick={() => navigate("/view-raised-bed")}
      >
        <img src={telescope} alt='light bulb' />
        <div>
          <h2>View My Creations</h2>
          <p>
            What did I plant? <br />
            Let me check my raised bed again...
          </p>
        </div>
      </div>
    </main>
  );
};

export default RaisedBedGalleryPage;
