import MinitureRaisedBed from "./MinitureRaisedBed";

const ViewRaisedBedListItem = ({ raisedBed, index, setDeleted }) => {
  const formatDate = (date) => {
    const yyyyMMDD = date.split("T");
    return yyyyMMDD[0].replace(/-/gi, ".");
  };

  return (
    <li key={index}>
      <MinitureRaisedBed raisedBed={raisedBed} setDeleted={setDeleted} />
      <p className='date-text'>{formatDate(raisedBed.createdAt)}</p>
      <p className='name-text'>{raisedBed.name}</p>
    </li>
  );
};

export default ViewRaisedBedListItem;
