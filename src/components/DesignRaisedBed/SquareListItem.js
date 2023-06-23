import { useContext } from "react";
import { raisedBedContext } from "../../helpers/createContext";
import client from "../../helpers/client";

const SquareListItem = ({
  square,
  index,
  squareId,
  setSquareId,
  columns,
  rows,
}) => {
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

  const highlightClickedSquare = (clickedSquareId) =>
    clickedSquareId === squareId ? "container__square--clicked" : "";

  const adjustSquareSize = () => (columns > 4 || rows > 4 ? "--small" : "");

  return (
    <li
      key={index}
      className={`container__square--preview${adjustSquareSize()} ${highlightClickedSquare(
        square.id
      )}`}
      onClick={() => setSquareId(square.id)}
      onDrop={(e) => drop(e)}
      onDragOver={(e) => e.preventDefault()}>
      {square.plantId ? (
        <img
          src={`${process.env.REACT_APP_API_URL}${square.plant.imagePerSquare}`}
          alt={`${square.plant.name} per square`}
        />
      ) : (
        <div className={`container__soil${adjustSquareSize()}`}></div>
      )}
    </li>
  );
};

export default SquareListItem;
