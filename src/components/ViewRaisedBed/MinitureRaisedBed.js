import client from "../../helpers/client";
import deleteIcon from "../../assets/delete.png";

const MinitureRaisedBed = ({ raisedBed, setDeleted }) => {
  const deleteRaisedBed = (raisedBedId) => {
    client
      .delete(`/raisedbed/${raisedBedId}`)
      .then((res) => setDeleted(res.data));
  };

  const gridTemplateColumns = {
    gridTemplateColumns: `repeat(${raisedBed.columns}, 1fr)`,
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
      <button
        onClick={() => deleteRaisedBed(raisedBed.id)}
        className='delete-btn'
      >
        <img src={deleteIcon} alt='delete-icon' />
      </button>
    </div>
  );
};

export default MinitureRaisedBed;
