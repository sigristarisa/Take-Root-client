import { useContext } from "react";
import { userContext } from "../../helpers/createContext";
import { useNavigate } from "react-router-dom";

const UserButton = ({ initialUserState }) => {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();

  console.log(user.user);
  const handleLogout = () => {
    setUser(initialUserState);
    localStorage.clear();
    navigate("../", { replace: true });
  };

  return (
    <div className='login-signup-btn-container'>
      <button className='login-btn' onClick={() => handleLogout()}>
        Logout
      </button>
      <button className='user-btn'>
        <img
          src={`http://localhost:4000${user.userImage}`}
          alt='user default'
        />
      </button>
    </div>
  );
};

export default UserButton;
