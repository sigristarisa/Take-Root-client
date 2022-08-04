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
    <div className='preview-mini-raisedbed-container'>
      <div className='mini-raisedbed-container' style={gridTemplateColumns}>
        {raisedBed.square.map((square, index) => (
          <div className='mini-square-container' key={index}>
            {square.plant ? (
              <img
                className='miniture-plant-container'
                src={`http://localhost:4000${square.plant.imagePerSquare}`}
                alt={`miniture ${square.plant.name}`}
              />
            ) : (
              <div className='miniture-soil-container'></div>
            )}
          </div>
        ))}
      </div>
      {!isInspiration && (
        <button
          onClick={() => renderDeleteWindow(raisedBed.id)}
          className='delete-btn'
        >
          <img src={deleteIcon} alt='delete-icon' />
        </button>
      )}
    </div>
  );
};

export default MinitureRaisedBed;
