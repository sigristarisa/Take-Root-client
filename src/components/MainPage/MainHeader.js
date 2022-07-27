import { useContext } from "react";
import { userContext } from "../../helpers/createContext";

const MainHeader = () => {
  const { user } = useContext(userContext);
  return (
    <header>
      <div>LOGO</div>
      <button>{user.userName}</button>
      <div>USER IMAGE</div>
    </header>
  );
};

export default MainHeader;
