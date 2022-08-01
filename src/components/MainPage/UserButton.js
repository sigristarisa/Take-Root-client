import { useContext } from "react";
import { userContext } from "../../helpers/createContext";

const UserButton = ({ initialUserState }) => {
  const { user, setUser } = useContext(userContext);

  const handleLogout = () => {
    setUser(initialUserState);
    localStorage.clear();
  };

  return (
    <div>
      <button>{user.userName}</button>
      <button onClick={() => handleLogout()}>LOGOUT</button>
    </div>
  );
};

export default UserButton;
