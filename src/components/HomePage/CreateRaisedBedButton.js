import { useNavigate } from "react-router-dom";
import snipper from "../../assets/snipper.png";

const CreateRaisedBedButton = ({ setHeaderColor }) => {
  const navigate = useNavigate();

  const changeHeaderGreen = () => {
    setHeaderColor("header-green");
    navigate("../create-raised-bed");
  };

  return (
    <div>
      <h2>Planning</h2>
      <div
        className='create-raised-bed-btn'
        onClick={() => changeHeaderGreen()}
      >
        <img src={snipper} alt='snipper' />
        <div>
          <h2>My planned plant-beds</h2>
          <p>You can create your raised beds here</p>
        </div>
      </div>
    </div>
  );
};

export default CreateRaisedBedButton;
