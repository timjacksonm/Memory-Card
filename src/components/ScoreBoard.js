function ScoreBoard(props) {
  const { currentScore, bestScore } = props;
  return (
    <div className="scoreContainer">
      <p>Current Score:</p>
      <p className="score">{currentScore}</p>
      <p>Best Score:</p>
      <p className="score">{bestScore}</p>
    </div>
  );
}
export default ScoreBoard;
