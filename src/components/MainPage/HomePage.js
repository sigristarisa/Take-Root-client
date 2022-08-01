import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../helpers/createContext";
import MainBanner from "./MainBanner";
import HowItWorks from "./HowItWorks";
import Methods from "./Methods";

import "../Signup/Signup.css";

const HomePage = ({ isLoggedIn }) => {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  return (
    <div>
      <main>
        <MainBanner isLoggedIn={isLoggedIn} />
        {isLoggedIn(user) && (
          <button
            onClick={() => {
              navigate("../create-raised-bed");
            }}
          >
            Create raised bed
          </button>
        )}
        <HowItWorks />
        <Methods />
      </main>
    </div>
  );
};

export default HomePage;
