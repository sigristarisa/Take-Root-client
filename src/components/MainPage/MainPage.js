import MainHeader from "./MainHeader";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MainHeader />
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
