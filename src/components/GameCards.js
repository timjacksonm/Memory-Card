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
      const value = props.masterList.find(
        (object) => object.id === randomIDs[i]
      );
      scrambledList.push(value);
    }
    return scrambledList;
  };

  const [characterList, setCharacterList] = useState(getRandomList());

  const clickEvent = (e) => {
    const num = e.target.id;
    props.masterList[num - 1].checked = true;
    setCharacterList(getRandomList());
  };

  return (
    <div className='cards'>
      {characterList.map(({ id, src, name }) => {
        return (
          <div key={id} className='individualCard'>
            <span
              className='screenOverCharacters'
              onClick={clickEvent}
              id={id}
            ></span>
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
