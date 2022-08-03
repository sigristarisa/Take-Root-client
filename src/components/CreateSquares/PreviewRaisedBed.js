const PreviewRaisedBed = ({ square }) => {
  const createSquares = () => {
    const rows = square.row;
    const columns = square.column;
    const squareNum = rows * columns;
    const squareArr = [];

    for (let i = 0; i < squareNum; i++) {
      squareArr.push("");
    }
    return squareArr;
  };

  const gridTemplateColumns = {
    gridTemplateColumns: `repeat(${square.column}, 1fr)`,
  };

  return (
    <aside className='preview-container'>
      <ul className='raised-bed-container' style={gridTemplateColumns}>
        {createSquares().map((square, index) => (
          <li key={index} className='square-container'>
            <div className='soil-container'></div>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default PreviewRaisedBed;
