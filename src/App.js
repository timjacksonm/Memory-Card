import { useState, useEffect } from 'react';
import characters from './components/Characters';
import Title from './components/Title';
import ScoreBoard from './components/ScoreBoard';
import GameCards from './components/GameCards';
import Footer from './components/Footer';
import './styles/app.css';

function App() {
  const [masterList, setMasterList] = useState(characters);
  const [charLimit, setCharLimit] = useState(12);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className='content'>
      <Title />
      <ScoreBoard
        masterList={masterList}
        currentScore={currentScore}
        bestScore={bestScore}
      />
      <GameCards
        masterList={masterList}
        setMasterList={setMasterList}
        charLimit={charLimit}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        setBestScore={setBestScore}
      />
      <Footer />
    </div>
  );
}

export default App;
