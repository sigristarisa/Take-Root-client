import { useState, useEffect, useContext } from "react";
import client from "../../helpers/client";
import { userContext } from "../../helpers/createContext";
import ViewRaisedBedListItem from "./ViewRaisedBedListItem";
import "./ViewRaisedBedPage.css";

const ViewRaisedBedPage = () => {
  const { user } = useContext(userContext);
  const [raisedBedList, setRaisedBedList] = useState([]);

  console.log("raisedBedList", raisedBedList);

  useEffect(() => {
    client
      .get(`/raisedbed/user/${user.id}`)
      .then((res) => setRaisedBedList(res.data.raisedBed));
  }, []);

  return (
    <main>
      <h1>My Planned Raised Beds</h1>
      <div>
        <ul className='view-raisedbed-list'>
          {raisedBedList.map((raisedBed, index) => (
            <ViewRaisedBedListItem raisedBed={raisedBed} index={index} />
          ))}
          <li className='preview-mini-raisedbed-container'>
            Create New RaisedBed
          </li>
        </ul>
      </div>
    </main>
  );
};

export default ViewRaisedBedPage;
