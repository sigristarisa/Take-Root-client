import { useContext } from "react";
import { raisedBedContext } from "../../helpers/createContext";
import client from "../../helpers/client";

const SquareListItem = ({ square, index, squareId, setSquareId }) => {
  const { raisedBed, setRaisedBed } = useContext(raisedBedContext);

  const drop = (e) => {
    const plantId = e.dataTransfer.getData("plantId");
    const idObj = { squareId: Number(squareId), plantId: Number(plantId) };
    client.patch("/square", idObj).then(() => {
      client.get(`/raisedbed/${raisedBed.raisedBed.id}`).then((res) => {
        setRaisedBed(res.data);
      });
    });
  };

  const highlightClickedSquare = (clickedSquareId) => {
    return clickedSquareId === squareId ? "clicked" : "";
  };

  return (
    <li
      key={index}
      className={`square-container square-list-item ${highlightClickedSquare(
        square.id
      )}`}
      onClick={() => setSquareId(square.id)}
      onDrop={(e) => drop(e)}
      onDragOver={(e) => e.preventDefault()}
    >
      {square.plantId ? (
        <img
          src={`http://localhost:4000${square.plant.imagePerSquare}`}
          alt={`${square.plant.name} per square`}
        />
      ) : (
        <div className='soil-container'></div>
      )}
    </li>
  );
};

export default SquareListItem;
