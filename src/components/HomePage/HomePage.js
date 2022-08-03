import MainBanner from "./MainBanner";
import HowItWorks from "./HowItWorks";
import Methods from "./Methods";
import CreateRaisedBedButton from "./CreateRaisedBedButton";
import ViewRaisedBedButton from "./ViewRaisedBedButton";
import "./HomePage.css";

const HomePage = ({ isLoggedIn, setHeaderColor }) => {
  return (
    <main className='home-page-main'>
      <MainBanner isLoggedIn={isLoggedIn} />
      {isLoggedIn() && (
        <div className='raised-bed-btn-container'>
          <CreateRaisedBedButton setHeaderColor={setHeaderColor} />
          <ViewRaisedBedButton />
        </div>
      )}
      <HowItWorks />
      <Methods />
    </main>
  );
};

export default HomePage;
