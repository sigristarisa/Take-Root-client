import { useNavigate } from "react-router-dom";
import telescope from "../../assets/telescope.png";

const ViewRaisedBedButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>View</h2>
      <div
        className='view-raised-bed-btn'
        onClick={() => navigate("../view-raised-bed")}
      >
        <img src={telescope} alt='telescope' />
        <div>
          <h2>View My Raised Beds</h2>
          <p>You can view your raised beds here</p>
        </div>
      </div>
    </div>
  );
};

export default ViewRaisedBedButton;
