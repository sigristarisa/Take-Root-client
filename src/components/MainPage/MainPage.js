import MainHeader from "./MainHeader";
import { useNavigate } from "react-router-dom";
const MainPage = ({ initialUserState }) => {
  const navigate = useNavigate();
  return (
    <div>
      <MainHeader initialUserState={initialUserState} />
      <main>hi</main>
      <button
        onClick={() => {
          navigate("../create-raised-bed");
        }}
      >
        Create raised bed
      </button>
    </div>
  );
};

export default MainPage;
