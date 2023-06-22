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
    <aside className="container__preview-raised-bed">
      <ul className="container__raised-bed" style={gridTemplateColumns}>
        {createSquares().map((square, index) => (
          <li key={index} className="container__square">
            <div className="container__soil"></div>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default PreviewRaisedBed;
