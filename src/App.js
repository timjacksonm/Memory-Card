import { useState, useEffect } from 'react';
import Title from './components/Title'
import ScoreBoard from './components/ScoreBoard'
import GameCards from './components/GameCards';
import Footer from './components/Footer'
import './styles/app.css';

function App() {
  return (
    <div className='content'>
      <Title />
      <ScoreBoard />
      <GameCards />
      <Footer />
    </div>
  );
}

export default App;
