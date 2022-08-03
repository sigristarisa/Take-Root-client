import MinitureRaisedBed from "./MinitureRaisedBed";
import client from "../../helpers/client";

const ViewRaisedBedListItem = ({ raisedBed, index, setDeleted }) => {
  const formatDate = (date) => {
    const yyyyMMDD = date.split("T");
    return yyyyMMDD[0].replace(/-/gi, ".");
  };

  const deleteRaisedBed = (raisedBedId) => {
    client
      .delete(`/raisedbed/${raisedBedId}`)
      .then((res) => setDeleted(res.data));
  };

  return (
    <li key={index}>
      <MinitureRaisedBed raisedBed={raisedBed} />
      <p>{formatDate(raisedBed.createdAt)}</p>
      <p>{raisedBed.name}</p>
      <button onClick={() => deleteRaisedBed(raisedBed.id)}>Delete</button>
    </li>
  );
};

export default ViewRaisedBedListItem;
