import MinitureRaisedBed from "./MinitureRaisedBed";

const ViewRaisedBedListItem = ({ raisedBed, index }) => {
  const formatDate = (date) => {
    const yyyyMMDD = date.split("T");
    return yyyyMMDD[0].replace(/-/gi, ".");
  };

  return (
    <li key={index}>
      <MinitureRaisedBed raisedBed={raisedBed} />
      <p>{formatDate(raisedBed.createdAt)}</p>
      <p>{raisedBed.name}</p>
    </li>
  );
};

export default ViewRaisedBedListItem;
