function ScoreBoard(props) {
  return (
    <div className='scoreContainer'>
      <p>Current Score</p>
      <p>{props.currentScore}</p>
      <p>Best Score</p>
      <p>{props.bestScore}</p>
    </div>
  );
}
export default ScoreBoard;
