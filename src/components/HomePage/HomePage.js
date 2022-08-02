import MainBanner from "./MainBanner";
import HowItWorks from "./HowItWorks";
import Methods from "./Methods";
import CreateRaisedBedButton from "./CreateRaisedBedButton";
import "./HomePage.css";

const HomePage = ({ isLoggedIn }) => {
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
