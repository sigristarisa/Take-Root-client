import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../helpers/client";
import { userContext } from "../../helpers/createContext";
import ViewRaisedBedListItem from "./ViewRaisedBedListItem";
import plusLogo from "../../assets/plus-logo.png";
import "./ViewRaisedBedPage.css";

const ViewRaisedBedPage = () => {
  const { user } = useContext(userContext);
  const [raisedBedList, setRaisedBedList] = useState([]);
  const [deleted, setDeleted] = useState({});
  const [willDelete, setWillDelete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    client
      .get(`/raisedbed/user/${user.id}`)
      .then((res) => setRaisedBedList(res.data.raisedBed));
  }, [deleted]);

  return (
    <main className='view-raisedbed-main'>
      <h1>My Planned Raised Beds</h1>
      <div>
        <ul className='view-raisedbed-list'>
          {raisedBedList.map((raisedBed, index) => (
            <ViewRaisedBedListItem
              raisedBed={raisedBed}
              index={index}
              setDeleted={setDeleted}
              setWillDelete={setWillDelete}
            />
          ))}
          <li
            className='preview-mini-raisedbed-container create-raisedbed-btn'
            onClick={() => navigate("../create-raised-bed")}
          >
            <img src={plusLogo} alt='plus' />
          </li>
        </ul>
      </div>
    </main>
  );
};

export default ViewRaisedBedPage;
