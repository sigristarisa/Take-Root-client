import MinitureRaisedBed from "../ViewRaisedBed/MinitureRaisedBed";
import formatDate from "../../helpers/formatDate";

const RaisedBedGalleryItem = ({ inspiration, key }) => {
  return (
    <li key={key}>
      <MinitureRaisedBed raisedBed={inspiration} isInspiration={true} />
      <p className="text__date">{formatDate(inspiration.createdAt)}</p>
      <p className="text__raised-bed-name">{inspiration.name}</p>
      <p className="text__user-name">{`Created by ${inspiration.user.userName}`}</p>
    </li>
  );
};

export default RaisedBedGalleryItem;
