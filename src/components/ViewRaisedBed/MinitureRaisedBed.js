const MinitureRaisedBed = ({ raisedBed }) => {
  const createMiniSquares = (rows, columns) => {
    const squareNum = rows * columns;
    const squareArr = [];
    for (let i = 0; i < squareNum; i++) {
      squareArr.push("");
    }

    return squareArr;
  };

  const gridTemplateColumns = {
    gridTemplateColumns: `repeat(${raisedBed.columns}, 1fr)`,
  };

  return (
    <div className='preview-mini-raisedbed-container'>
      <div className='mini-raisedbed-container' style={gridTemplateColumns}>
        {createMiniSquares(raisedBed.rows, raisedBed.columns).map(
          (square, index) => (
            <div className='mini-square-container'>
              {square.plantId ? (
                <img
                  className='miniture-plant-container'
                  src={`http://localhost:4000${square.plant.imagePerSquare}`}
                  alt={`miniture ${square.plant.name}`}
                />
              ) : (
                <div className='miniture-soil-container'></div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MinitureRaisedBed;
