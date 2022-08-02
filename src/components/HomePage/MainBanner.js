import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../helpers/createContext";
import mainImage from "../../assets/main-image.png";

const MainBanner = ({ isLoggedIn }) => {
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  return (
    <section className='main-container'>
      <img src={mainImage} alt='logo' className='logo' />
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
          The first online garden planner, combining <br />
          the square-foot method and the companion method.
        </h2>
        <div>
          {!isLoggedIn() && (
            <button
              className='lets-get-started-btn'
              onClick={() => navigate("../signup")}
            >
              Let's get started
            </button>
          )}
          <button className='what-methods-btn'>What methods?</button>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
