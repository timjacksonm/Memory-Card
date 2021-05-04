import { useState, useEffect } from 'react';

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

  const clickEvent = (e) => {
    setCharacterList(getRandomList());
    // props.setMasterList((prevState) => {
    //   prevState[e.target.id - 1].checked = true;
    // });
  };

  console.log(props.masterList);
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
