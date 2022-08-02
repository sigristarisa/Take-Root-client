import MainBanner from "./MainBanner";
import HowItWorks from "./HowItWorks";
import Methods from "./Methods";
import CreateRaisedBedButton from "./CreateRaisedBedButton";
import "./HomePage.css";

const HomePage = ({ isLoggedIn, setHeaderColor }) => {
  return (
    <div>
      <main>
        <MainBanner isLoggedIn={isLoggedIn} />
        {isLoggedIn() && (
          <CreateRaisedBedButton setHeaderColor={setHeaderColor} />
        )}
        <HowItWorks />
        <Methods />
      </main>
    </div>
  );
};

export default HomePage;
