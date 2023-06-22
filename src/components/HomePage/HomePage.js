import MainBanner from "./MainBanner";
import HowItWorks from "./HowItWorks";
import Methods from "./Methods";
import CreateRaisedBedButton from "./CreateRaisedBedButton";
import ViewRaisedBedButton from "./ViewRaisedBedButton";
import "./HomePage.css";

const HomePage = ({ isLoggedIn, setHeaderColor }) => {
  return (
    <main className="main__homepage">
      <MainBanner isLoggedIn={isLoggedIn} />
      {isLoggedIn() && (
        <section className="raised-bed-btn-container">
          <CreateRaisedBedButton setHeaderColor={setHeaderColor} />
          <ViewRaisedBedButton />
        </section>
      )}
      <HowItWorks />
      <Methods />
    </main>
  );
};

export default HomePage;
