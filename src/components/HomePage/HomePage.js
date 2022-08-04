import MainBanner from "./MainBanner";
import HowItWorks from "./HowItWorks";
import Methods from "./Methods";
import CreateRaisedBedButton from "./CreateRaisedBedButton";
import ViewRaisedBedButton from "./ViewRaisedBedButton";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = ({ isLoggedIn, setHeaderColor }) => {
  const navigate = useNavigate();
  return (
    <main className='home-page-main'>
      <MainBanner isLoggedIn={isLoggedIn} />
      {isLoggedIn() && (
        <section className='raised-bed-btn-container'>
          <CreateRaisedBedButton setHeaderColor={setHeaderColor} />
          <ViewRaisedBedButton />
          <button onClick={() => navigate("/raised-bed-gallery")}>
            Gallery
          </button>
        </section>
      )}
      <HowItWorks />
      <Methods />
    </main>
  );
};

export default HomePage;
