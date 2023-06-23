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
      <p className="text__date">{formatDate(raisedBed.createdAt)}</p>
      <p className="text__raised-bed-name">{raisedBed.name}</p>
    </li>
  );
};

export default ViewRaisedBedListItem;
