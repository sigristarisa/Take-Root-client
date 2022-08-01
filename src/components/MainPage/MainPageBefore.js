import MainHeader from "./MainHeader";
import { useNavigate } from "react-router-dom";

const MainPageBefore = ({ initialUserState, isLoggedIn }) => {
  return (
    <div>
      <MainHeader initialUserState={initialUserState} isLoggedIn={isLoggedIn} />
      <main>LandingPage</main>
    </div>
  );
};

export default MainPageBefore;
