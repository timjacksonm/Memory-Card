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

  return (
    <div className='content'>
      <Title />
      <ScoreBoard />
      <GameCards
        masterList={masterList}
        setMasterList={setMasterList}
        charLimit={charLimit}
      />
      <Footer />
    </div>
  );
}

export default App;
