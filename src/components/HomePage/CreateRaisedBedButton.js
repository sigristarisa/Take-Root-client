import { useNavigate } from "react-router-dom";
import snipper from "../../assets/snipper.png";

const CreateRaisedBedButton = ({ setHeaderColor }) => {
  const navigate = useNavigate();

  const changeHeaderGreen = () => {
    setHeaderColor("header-green");
    navigate("../create-raised-bed");
  };

  return (
    <div className='create-raised-bed-btn' onClick={() => changeHeaderGreen()}>
      <img src={snipper} alt='snipper' />
      <div>
        <h2>Create New Raised Bed</h2>
        <p>You can plan your raised beds here</p>
      </div>
    </div>
  );
};

export default CreateRaisedBedButton;
