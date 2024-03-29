import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import client from "../../helpers/client";
import { raisedBedContext } from "../../helpers/createContext";

const NameRaisedBed = ({ editRaisedBed, setIsSubmitted, setHeaderColor }) => {
  const [raisedBedName, setRaisedBedName] = useState({});
  const { raisedBed } = useContext(raisedBedContext);
  const navigate = useNavigate();

  const handleRaisedBedName = (e) => {
    const { name, value } = e.target;
    setRaisedBedName({ ...raisedBedName, [name]: value });
  };

  const submitRaisedBedName = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    client
      .patch(`/raisedbed/name/${raisedBed.raisedBed.id}`, raisedBedName)
      .then(() =>
        setTimeout(() => {
          navigate("../");
          setHeaderColor("");
        }, 2000)
      );
  };

  return (
    <aside className="container__name-raised-bed">
      <form onSubmit={submitRaisedBedName}>
        <h1>Save</h1>
        <div className="container__name-raised-bed-input">
          <label>My raised bed name*</label>
          <input
            className="input__name-raised-bed"
            type="text"
            name="name"
            value={raisedBedName.name}
            onChange={handleRaisedBedName}
            placeholder="
          Mediterranean Garden"
            required
          />
        </div>
        <div className="container__plant-btn">
          <button className="btn__keep-edit" onClick={() => editRaisedBed()}>
            Keep editing
          </button>
          <input className="btn__save" type="submit" value="Save" />
        </div>
      </form>
      <div className="space"></div>
    </aside>
  );
};

export default NameRaisedBed;
