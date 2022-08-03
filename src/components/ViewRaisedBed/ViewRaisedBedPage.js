import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../helpers/client";
import { userContext } from "../../helpers/createContext";
import ViewRaisedBedListItem from "./ViewRaisedBedListItem";
import "./ViewRaisedBedPage.css";

const ViewRaisedBedPage = () => {
  const { user } = useContext(userContext);
  const [raisedBedList, setRaisedBedList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    client
      .get(`/raisedbed/user/${user.id}`)
      .then((res) => setRaisedBedList(res.data.raisedBed));
  }, []);

  return (
    <main className='view-raisedbed-main'>
      <h1>My Planned Raised Beds</h1>
      <div>
        <ul className='view-raisedbed-list'>
          {raisedBedList.map((raisedBed, index) => (
            <ViewRaisedBedListItem raisedBed={raisedBed} index={index} />
          ))}
          <li
            className='preview-mini-raisedbed-container create-raisedbed-btn'
            onClick={() => navigate("../create-raised-bed")}
          >
            Create New RaisedBed
          </li>
        </ul>
      </div>
    </main>
  );
};

export default ViewRaisedBedPage;
