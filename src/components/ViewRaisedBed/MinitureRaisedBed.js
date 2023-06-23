import deleteIcon from "../../assets/delete.png";

const MinitureRaisedBed = ({
  raisedBed,
  setDeletingId,
  setShowDelete,
  setConfirmDelete,
  isInspiration,
}) => {
  const gridTemplateColumns = {
    gridTemplateColumns: `repeat(${raisedBed.columns}, 1fr)`,
  };

  const renderDeleteWindow = (raisedBedId) => {
    setDeletingId(raisedBedId);
    setShowDelete(true);
    setConfirmDelete(false);
  };

  return (
    <div className="container__preview-mini-raised-bed">
      <div className="container__mini-raised-bed" style={gridTemplateColumns}>
        {raisedBed.square.map((square, index) => (
          <div className="container__mini-square" key={index}>
            {square.plant ? (
              <img
                className="container__mini-plant"
                src={`${process.env.REACT_APP_API_URL}${square.plant.imagePerSquare}`}
                alt={`miniture ${square.plant.name}`}
              />
            ) : (
              <div className="container__mini-soil"></div>
            )}
          </div>
        ))}
      </div>
      {!isInspiration && (
        <button
          onClick={() => renderDeleteWindow(raisedBed.id)}
          className="btn__delete-raised-bed">
          <img src={deleteIcon} alt="delete-icon" />
        </button>
      )}
    </div>
  );
};

export default MinitureRaisedBed;
