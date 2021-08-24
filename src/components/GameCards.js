function GameCards(props) {
  const {
    masterList,
    currentScore,
    bestScore,
    setBestScore,
    setCurrentScore,
    setMasterList,
    setCharacterList,
    getRandomList,
    characterList,
  } = props;

  const handleChoice = (e) => {
    if (masterList[e.target.id - 1].checked) {
      //set best score, reset currentScore, reset all checked & create new random list.
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
      setMasterList(() => {
        const defaultList = masterList.map((object) => {
          object.checked = false;
          return object;
        });
        return defaultList;
      });
      setCharacterList(getRandomList());
    } else {
      //add checked true, set current score & create new random list.
      setMasterList((prevState) => {
        prevState[e.target.id - 1].checked = true;
        const verifyCount = masterList.filter(
          (object) => object.checked === true
        );
        setCurrentScore(verifyCount.length);
        return prevState;
      });
      setCharacterList(getRandomList());
    }
  };

  return (
    <div className="main">
      <div className="cards">
        {characterList.map(({ id, src, name }) => {
          return (
            <div key={id} className="individualCard">
              <span
                onClick={handleChoice}
                className="screenOverCharacters"
                id={id}
              ></span>
              <div className="characterContainer">
                <input
                  src={`${process.env.PUBLIC_URL}${src}`}
                  alt={'image of ' + name}
                  type="image"
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
