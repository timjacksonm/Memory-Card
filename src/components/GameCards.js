import { useState, useEffect } from 'react';
import characters from './Characters';

function GameCards() {

  const [charLimit, setCharLimit] = useState(12);
  const [characterList, setCharacterList] = useState(characters)

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getRandomList() {
    const randomIDs = [];
    while (randomIDs.length !== charLimit) {
      const chosenNum = Math.round(getRandomArbitrary(1, 55));

      if (randomIDs.length < charLimit -1 && randomIDs.includes(chosenNum) === false) {
        randomIDs.push(chosenNum);
      } else if (randomIDs.length < charLimit && randomIDs.includes(chosenNum) === false && characterList[chosenNum - 1].checked === 'false') {
        randomIDs.push(chosenNum);
      } else {
        //score 55 = win
      }
    }
    return characterList.filter(character => randomIDs.includes(character.id))
  }
  // console.log(setCharacterList(characterList[0].checked = 'true'))
  console.log(characterList)
    return (
        <div className='cards'>
            {getRandomList().map(({ id, src, name }) => {
        return (
          <div>
            <img
              key={id}
              src={process.env.PUBLIC_URL + src}
              alt={'image of ' + name}
            />
            <p>{name}</p>
          </div>
        )
              
      })}
        </div>
    )
}
export default GameCards;
