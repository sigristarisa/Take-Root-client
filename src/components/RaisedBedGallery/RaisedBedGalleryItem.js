import MinitureRaisedBed from "../ViewRaisedBed/MinitureRaisedBed";
import formatDate from "../../helpers/formatDate";

const RaisedBedGalleryItem = ({ inspiration, key }) => {
  return (
    <li key={key}>
      <MinitureRaisedBed raisedBed={inspiration} isInspiration={true} />
      <p className='date-text'>{formatDate(inspiration.createdAt)}</p>
      <p className='name-text'>{inspiration.name}</p>
      <p className='user-name-text'>{`Created by ${inspiration.user.userName}`}</p>
    </li>
  );
};

export default RaisedBedGalleryItem;
