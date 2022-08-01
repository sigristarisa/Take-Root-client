import { useState, useContext } from "react";
import client from "../../helpers/client";
import { raisedBedContext } from "../../helpers/createContext";

const NameRaisedBed = ({ editRaisedBed }) => {
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
      .then((res) => console.log("what's the response", res.data));
  };

  return (
    <form onSubmit={submitRaisedBedName}>
      <input
        type='text'
        name='name'
        value={raisedBedName.name}
        onChange={handleRaisedBedName}
      />
      <button onClick={() => editRaisedBed()}>Keep editing</button>
      <input type='submit' />
    </form>
  );
};

export default NameRaisedBed;
