import { useNavigate } from "react-router-dom";
import MainBanner from "./MainBanner";
import HowItWorks from "./HowItWorks";
import Methods from "./Methods";
import CreateRaisedBedButton from "./CreateRaisedBedButton";
import "./HomePage.css";

const HomePage = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <div>
      <main>
        <MainBanner isLoggedIn={isLoggedIn} />
        {isLoggedIn() && <CreateRaisedBedButton />}
        <HowItWorks />
        <Methods />
      </main>
    </div>
  );
};

export default HomePage;
