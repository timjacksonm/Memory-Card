function GameCards(props) {
  const handleChoice = (e) => {
    if (props.masterList[e.target.id - 1].checked) {
      //set best score, reset currentScore, reset all checked & create new random list.
      if (props.currentScore > props.bestScore) {
        props.setBestScore(props.currentScore);
      }
      props.setCurrentScore(0);
      props.setMasterList(() => {
        const defaultList = props.masterList.map((object) => {
          object.checked = false;
          return object;
        });
        return defaultList;
      });
    } else {
      //add checked true, set current score & create new random list.
      props.setMasterList((prevState) => {
        prevState[e.target.id - 1].checked = true;
        return prevState;
      });
      const verifyCount = props.masterList.filter(
        (object) => object.checked === true
      );
      props.setCurrentScore(verifyCount.length);
    }
    props.setCharacterList(props.getRandomList());
  };

  return (
    <div className='main'>
      <div className='cards'>
        {props.characterList.map(({ id, src, name }) => {
          return (
            <div key={id} className='individualCard'>
              <span
                onClick={handleChoice}
                className='screenOverCharacters'
                id={id}
              ></span>
              <div className='characterContainer'>
                <input
                  src={`${process.env.PUBLIC_URL}${src}`}
                  alt={'image of ' + name}
                  type='image'
                />
                <p>{name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default GameCards;
