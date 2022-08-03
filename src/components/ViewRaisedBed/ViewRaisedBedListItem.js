import MinitureRaisedBed from "./MinitureRaisedBed";

const ViewRaisedBedListItem = ({ raisedBed, index }) => {
  return (
    <li key={index}>
      <MinitureRaisedBed raisedBed={raisedBed} />
      <p>{raisedBed.createdAt}</p>
      <p>{raisedBed.name}</p>
    </li>
  );
};

export default ViewRaisedBedListItem;
