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

  const adjustSquareSize = () => {
    const columns = square.column;
    const rows = square.row;
    return columns > 4 || rows > 4 ? "--small" : "";
  };

  const gridTemplateColumns = {
    gridTemplateColumns: `repeat(${square.column}, 1fr)`,
  };

  return (
    <aside className="container__preview-raised-bed">
      <ul className="container__raised-bed" style={gridTemplateColumns}>
        {createSquares().map((square, index) => (
          <li key={index} className={`container__square${adjustSquareSize()}`}>
            <div className={`container__soil${adjustSquareSize()}`}></div>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default PreviewRaisedBed;
