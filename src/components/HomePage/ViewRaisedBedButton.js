import { useNavigate } from "react-router-dom";
import telescope from "../../assets/telescope.png";

const ViewRaisedBedButton = () => {
  const navigate = useNavigate();

  return (
    <div
      className="btn__view-raised-bed"
      onClick={() => navigate("../view-raised-bed")}>
      <img src={telescope} alt="telescope" />
      <div>
        <h2>View My Raised Beds</h2>
        <p>You can view your raised beds here</p>
      </div>
    </div>
  );
};

export default ViewRaisedBedButton;
