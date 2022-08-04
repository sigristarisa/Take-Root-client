import MinitureRaisedBed from "./MinitureRaisedBed";
import formatDate from "../../helpers/formatDate";

const ViewRaisedBedListItem = ({
  raisedBed,
  index,
  setDeletingId,
  setShowDelete,
  setConfirmDelete,
}) => {
  return (
    <li key={index}>
      <MinitureRaisedBed
        raisedBed={raisedBed}
        setDeletingId={setDeletingId}
        setShowDelete={setShowDelete}
        setConfirmDelete={setConfirmDelete}
      />
      <p className='date-text'>{formatDate(raisedBed.createdAt)}</p>
      <p className='name-text'>{raisedBed.name}</p>
    </li>
  );
};

export default ViewRaisedBedListItem;
