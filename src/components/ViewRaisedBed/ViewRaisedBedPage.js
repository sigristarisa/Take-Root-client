import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../helpers/client";
import { userContext } from "../../helpers/createContext";
import ViewRaisedBedListItem from "./ViewRaisedBedListItem";
import plusLogo from "../../assets/plus-logo.png";
import inspiration from "../../assets/inspiration.png";
import "./ViewRaisedBedPage.css";

const ViewRaisedBedPage = ({ setHeaderColor }) => {
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
    <main className="main__view-raised-bed">
      {showDelete && (
        <div className="container__delete">
          <div className="popup__delete">
            <h2>Delete</h2>
            <p>Do you really want to delete this raised bed?</p>
            <div className="container__delete-btn">
              <button
                className="btn__dont-delete"
                onClick={() => setShowDelete(false)}>
                No,cancel
              </button>
              <button className="btn__delete" onClick={() => deleteRaisedBed()}>
                Yes, delete
              </button>
            </div>
          </div>
          <div className="bg__delete"></div>
        </div>
      )}
      <h1>My Planned Raised Beds</h1>
      <div>
        <ul className="list__view-raised-bed">
          <li
            key="create-raised-bed-btn"
            className="container__preview-mini-raised-bed btn__preview-create-raised-bed"
            onClick={() => {
              setHeaderColor("header__green");
              navigate("../create-raised-bed");
            }}>
            <img src={plusLogo} alt="plus" />
          </li>
          {raisedBedList.map((raisedBed, index) => (
            <ViewRaisedBedListItem
              raisedBed={raisedBed}
              index={index}
              key={index}
              setDeletingId={setDeletingId}
              setShowDelete={setShowDelete}
              setConfirmDelete={setConfirmDelete}
            />
          ))}
        </ul>
      </div>
      <div
        className="container__get-inspiration"
        onClick={() => navigate("/raised-bed-gallery")}>
        <img src={inspiration} alt="light bulb" />
        <div>
          <h2>Get Some Inspirations</h2>
          <p>
            What did others plant? <br />
            See our communities' raised beds ...
          </p>
        </div>
      </div>
    </main>
  );
};

export default ViewRaisedBedPage;
