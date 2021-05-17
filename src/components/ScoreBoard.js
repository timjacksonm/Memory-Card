function ScoreBoard(props) {
  return (
    <div className='scoreContainer'>
      <p>Current Score:</p>
      <p className='score'>{props.currentScore}</p>
      <p>Best Score:</p>
      <p className='score'>{props.bestScore}</p>
    </div>
  );
}
export default ScoreBoard;
