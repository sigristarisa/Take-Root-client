import { useNavigate } from "react-router-dom";
import shovel from "../../assets/shaberu.png";

const CreateRaisedBedButton = ({ setHeaderColor }) => {
  const navigate = useNavigate();

  const changeHeaderGreen = () => {
    setHeaderColor("header-green");
    navigate("../create-raised-bed");
  };

  return (
    <div className='create-raised-bed-btn' onClick={() => changeHeaderGreen()}>
      <img src={shovel} alt='shaberu' />
      <div>
        <h2>My planned plant-beds</h2>
        <p>You can create your raised beds here</p>
      </div>
    </div>
  );
};

export default CreateRaisedBedButton;
