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
  const [deletingId, setDeletingId] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    client
      .get(`/raisedbed/user/${user.id}`)
      .then((res) => setRaisedBedList(res.data.raisedBed));
  }, [confirmDelete]);

  const deleteRaisedBed = () => {
    client.delete(`/raisedbed/${deletingId}`).then(() => {
      setShowDelete(false);
      setConfirmDelete(true);
    });
  };

  return (
    <main className='view-raisedbed-main'>
      {showDelete && (
        <div className='delete-container'>
          <div className='delete-window'>
            <h2>Delete</h2>
            <p>Do you really want to delete this raised bed?</p>
            <div className='delete-btn-container'>
              <button
                className='no-cancel-btn'
                onClick={() => setShowDelete(false)}
              >
                No,cancel
              </button>
              <button
                className='yes-delete-btn'
                onClick={() => deleteRaisedBed()}
              >
                Yes, delete
              </button>
            </div>
          </div>
          <div className='delete-background'></div>
        </div>
      )}
      <h1>My Planned Raised Beds</h1>
      <div>
        <ul className='view-raisedbed-list'>
          {raisedBedList.map((raisedBed, index) => (
            <ViewRaisedBedListItem
              raisedBed={raisedBed}
              index={index}
              setDeletingId={setDeletingId}
              setShowDelete={setShowDelete}
              setConfirmDelete={setConfirmDelete}
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
