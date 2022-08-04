import MinitureRaisedBed from "../ViewRaisedBed/MinitureRaisedBed";
import formatDate from "../../helpers/formatDate";

const RaisedBedGalleryItem = ({ inspiration, index }) => {
  return (
    <li key={index}>
      <MinitureRaisedBed raisedBed={inspiration} isInspiration={true} />
      <p className='date-text'>{formatDate(inspiration.createdAt)}</p>
      <p className='name-text'>{inspiration.name}</p>
      <p>{`Created by ${inspiration.userId}`}</p>
    </li>
  );
};

export default RaisedBedGalleryItem;
