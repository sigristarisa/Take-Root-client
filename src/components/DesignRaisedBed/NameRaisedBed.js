import { useState, useContext } from "react";
import client from "../../helpers/client";
import { raisedBedContext } from "../../helpers/createContext";

const NameRaisedBed = ({ editRaisedBed, setSubmitted }) => {
  const [raisedBedName, setRaisedBedName] = useState({});
  const { raisedBed } = useContext(raisedBedContext);

  const handleRaisedBedName = (e) => {
    const { name, value } = e.target;
    setRaisedBedName({ ...raisedBedName, [name]: value });
  };

  const submitRaisedBedName = (e) => {
    e.preventDefault();
    client
      .patch(`/raisedbed/name/${raisedBed.raisedBed.id}`, raisedBedName)
      .then((res) => console.log("what's the response", res.data))
      .then(() => setSubmitted(true));
  };

  return (
    <aside className='name-raisedbed-container'>
      <form onSubmit={submitRaisedBedName}>
        <h1>Save</h1>
        <div className='drop-down'>
          <label>My raised bed name*</label>
          <input
            className='name-input'
            type='text'
            name='name'
            value={raisedBedName.name}
            onChange={handleRaisedBedName}
            placeholder='
          Mediterranean Garden'
            required
          />
        </div>
        <div className='btn-container'>
          <button className='keep-edit-btn' onClick={() => editRaisedBed()}>
            Keep editing
          </button>
          <input className='save-btn' type='submit' value='Save' />
        </div>
      </form>
      <div className='space'></div>
    </aside>
  );
};

export default NameRaisedBed;
