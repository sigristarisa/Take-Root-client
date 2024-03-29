import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../helpers/createContext";
import mainImage from "../../assets/main-image.png";

const MainBanner = ({ isLoggedIn }) => {
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  return (
    <section className="main-banner">
      <img src={mainImage} alt="main icon" />
      <div>
        {isLoggedIn() ? (
          <h1>
            Welcome <br />
            {user.userName}!
          </h1>
        ) : (
          <h1>Welcome to Take Root.</h1>
        )}
        <h2>
          The first online garden planner,
          <br /> combining the square-foot method and <br />
          the companion method.
        </h2>
        <div>
          {!isLoggedIn() && (
            <button
              className="btn__lets-get-started"
              onClick={() => navigate("../signup")}>
              Let's get started
            </button>
          )}
          <a className="btn__what-methods" href="#methods-container">
            What methods?
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
