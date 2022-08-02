import { useNavigate } from "react-router-dom";
import shovel from "../../assets/shaberu.png";

const CreateRaisedBedButton = () => {
  const navigate = useNavigate();

  return (
    <div
      className='create-raised-bed-btn'
      onClick={() => {
        navigate("../create-raised-bed");
      }}
    >
      <img src={shovel} alt='shaberu' />
      <div>
        <h2>My planned plant-beds</h2>
        <p>You can create your raised beds here</p>
      </div>
    </div>
  );
};

export default CreateRaisedBedButton;
