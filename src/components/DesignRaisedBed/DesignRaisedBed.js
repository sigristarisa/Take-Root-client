import { useContext } from "react";
import { squareContext } from "../../helpers/createContext";
import client from "../../helpers/client";

const DesignRaisedBed = () => {
  const { square } = useContext(squareContext);
  console.log("whats this: ", square.data.newRaisedBed.id);

  client.get(`/${square.data.newRaisedBed.id}`);

  return <div>raisedBed</div>;
};

export default DesignRaisedBed;
