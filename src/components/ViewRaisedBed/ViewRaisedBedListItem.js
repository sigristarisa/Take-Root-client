import MinitureRaisedBed from "./MinitureRaisedBed";

const ViewRaisedBedListItem = ({
  raisedBed,
  index,
  setDeletingId,
  setShowDelete,
  setConfirmDelete,
}) => {
  const formatDate = (date) => {
    const yyyyMMDD = date.split("T");
    return yyyyMMDD[0].replace(/-/gi, ".");
  };

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
