import { useContext } from "react";
import { userContext } from "../../helpers/createContext";
import { useNavigate } from "react-router-dom";

const UserButton = ({ initialUserState }) => {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(initialUserState);
    localStorage.clear();
    navigate("../", { replace: true });
  };

  return (
    <div>
      <button>{user.userName}</button>
      <button onClick={() => handleLogout()}>LOGOUT</button>
    </div>
  );
};

export default UserButton;
