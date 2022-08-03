const MinitureRaisedBed = ({ raisedBed }) => {
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
    </div>
  );
};

export default MinitureRaisedBed;
