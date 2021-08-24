import { useState, useEffect } from 'react';
import characters from './components/Characters';
import Title from './components/Title';
import ScoreBoard from './components/ScoreBoard';
import GameCards from './components/GameCards';
import Footer from './components/Footer';
import Confetti from './components/Fireworks';
import './styles/app.css';

function App() {
  const charLimit = 12;
  const [masterList, setMasterList] = useState(characters);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [confettiMount, setConfettiMount] = useState(false);
  const [announcementContent, setAnnouncementContent] = useState(null);

  const getRandomList = () => {
    const randomIDs = [];

    while (randomIDs.length !== charLimit) {
      const chosenNum = Math.round(Math.random() * (55 - 1) + 1);

      if (
        randomIDs.length < charLimit - 1 &&
        randomIDs.includes(chosenNum) === false
      ) {
        randomIDs.push(chosenNum);
      } else if (
        randomIDs.length < charLimit &&
        randomIDs.includes(chosenNum) === false &&
        characters[chosenNum - 1].checked === false
      ) {
        randomIDs.push(chosenNum);
      } else {
        //score 55 = win
      }
    }
    const scrambledList = [];

    for (let i = 0; i < randomIDs.length; i++) {
      const object = characters.find((object) => object.id === randomIDs[i]);
      scrambledList.push(object);
    }
    return scrambledList;
  };

  const [characterList, setCharacterList] = useState(getRandomList);

  useEffect(() => {
    if (bestScore !== 0) {
      setConfettiMount(true);
      setAnnouncementContent(() => {
        return <div className={'announcement'}>New Best Score!</div>;
      });
      setTimeout(function () {
        setConfettiMount(false);
        setAnnouncementContent(null);
      }, 7500);
    }
  }, [bestScore]);

  return (
    <div className="content">
      {confettiMount && <Confetti />}
      <Title />
      {announcementContent}
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />

      <GameCards
        masterList={masterList}
        characterList={characterList}
        currentScore={currentScore}
        bestScore={bestScore}
        setMasterList={setMasterList}
        setCharacterList={setCharacterList}
        setCurrentScore={setCurrentScore}
        setBestScore={setBestScore}
        getRandomList={getRandomList}
      />

      <Footer />
    </div>
  );
}

export default App;
