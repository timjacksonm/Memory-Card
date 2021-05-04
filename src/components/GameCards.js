import { useState, useEffect } from 'react';
import characters from './Characters';

function GameCards() {
  const masterList = characters;
  const [charLimit, setCharLimit] = useState(12);

  const getRandomList = () => {
    const randomIDs = [];

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    while (randomIDs.length !== charLimit) {
      const chosenNum = Math.round(getRandomArbitrary(1, 55));

      if (
        randomIDs.length < charLimit - 1 &&
        randomIDs.includes(chosenNum) === false
      ) {
        randomIDs.push(chosenNum);
      } else if (
        randomIDs.length < charLimit &&
        randomIDs.includes(chosenNum) === false &&
        masterList[chosenNum - 1].checked === false
      ) {
        randomIDs.push(chosenNum);
      } else {
        //score 55 = win
      }
    }
    return masterList.filter((character) => randomIDs.includes(character.id));
  };

  const [characterList, setCharacterList] = useState(getRandomList());

  const clickEvent = (e) => {
    const num = e.target.id;
    masterList[num - 1].checked = true;
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
