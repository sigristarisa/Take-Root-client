import { useContext } from "react";
import { userContext } from "../../helpers/createContext";
import mainImage from "../../assets/main-image.png";

const MainBanner = ({ isLoggedIn }) => {
  const { user } = useContext(userContext);
  return (
    <section className='main-container'>
      <img src={mainImage} alt='logo' className='logo' />
      <div>
        {isLoggedIn() ? (
          <h1>Welcome {user.userName}!</h1>
        ) : (
          <h1>Welcome to Take Root.</h1>
        )}
        <h2>
          The first online plant bed planner, <br />
          combining the square-foot method <br />
          and the companion method.
        </h2>
        <div>
          <button>Let's get started</button>
          <button>What methods?</button>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
