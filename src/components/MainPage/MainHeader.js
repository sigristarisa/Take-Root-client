import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../helpers/createContext";

const MainHeader = ({ initialUserState }) => {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(initialUserState);
    localStorage.clear();
    navigate("../", { replace: true });
  };

  return (
    <header>
      <div>LOGO</div>
      <button>{user.userName}</button>
      <button onClick={() => handleLogout()}>LOGOUT</button>
      <div>USER IMAGE</div>
    </header>
  );
};

export default MainHeader;
