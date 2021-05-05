import { useState, useEffect } from 'react';
import characters from './Characters';

function GameCards(props) {
  const getRandomList = () => {
    const randomIDs = [];

    while (randomIDs.length !== props.charLimit) {
      const chosenNum = Math.round(Math.random() * (55 - 1) + 1);

      if (
        randomIDs.length < props.charLimit - 1 &&
        randomIDs.includes(chosenNum) === false
      ) {
        randomIDs.push(chosenNum);
      } else if (
        randomIDs.length < props.charLimit &&
        randomIDs.includes(chosenNum) === false &&
        props.masterList[chosenNum - 1].checked === false
      ) {
        randomIDs.push(chosenNum);
      } else {
        //score 55 = win
      }
    }
    const scrambledList = [];

    for (let i = 0; i < randomIDs.length; i++) {
      const object = props.masterList.find(
        (object) => object.id === randomIDs[i]
      );
      scrambledList.push(object);
    }
    return scrambledList;
  };

  const [characterList, setCharacterList] = useState(getRandomList());

  useEffect(() => {
    const updateScore = () => {
      const verifyCount = props.masterList.filter(
        (object) => object.checked === true
      );
      props.setCurrentScore(verifyCount.length);
    };

    const handleChoice = (e) => {
      if (props.masterList[e.target.id].checked) {
        //set best score, reset currentScore, reset all checked.
        props.setBestScore(props.currentScore);
      } else {
        //add checked true, set current score & create new random list.
        props.setMasterList((prevState) => {
          prevState[e.target.id - 1].checked = true;
          return prevState;
        });
        setCharacterList(getRandomList());
        updateScore();
      }
    };

    document
      .querySelectorAll('span')
      .forEach((span) => span.addEventListener('click', handleChoice));
    return () => {
      document
        .querySelectorAll('span')
        .forEach((span) => span.removeEventListener('click', handleChoice));
    };
  }, [characterList]);

  return (
    <div className='cards'>
      {characterList.map(({ id, src, name }) => {
        return (
          <div key={id} className='individualCard'>
            <span className='screenOverCharacters' id={id}></span>
            <div className='characterContainer'>
              <input
                src={process.env.PUBLIC_URL + src}
                alt={'image of ' + name}
                type='image'
              />
              <p>{name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default GameCards;
