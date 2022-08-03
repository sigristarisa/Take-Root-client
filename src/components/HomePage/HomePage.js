import { useNavigate } from "react-router-dom";
import MainBanner from "./MainBanner";
import HowItWorks from "./HowItWorks";
import Methods from "./Methods";
import CreateRaisedBedButton from "./CreateRaisedBedButton";
import "./HomePage.css";

const HomePage = ({ isLoggedIn, setHeaderColor }) => {
  const navigate = useNavigate();
  return (
    <div>
      <main className='home-page-main'>
        <MainBanner isLoggedIn={isLoggedIn} />
        {isLoggedIn() && (
          <div>
            <CreateRaisedBedButton setHeaderColor={setHeaderColor} />
            <button onClick={() => navigate("../view-raised-bed")}>
              View Raised Bed
            </button>
          </div>
        )}
        <HowItWorks />
        <Methods />
      </main>
    </div>
  );
};

export default HomePage;
