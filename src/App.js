import { useState, useEffect } from 'react';
import characters from './Components/Images.js';
import './Styles/app.css';

function App() {
  return (
    <div>
      {characters.map(({ id, src, name }) => {
        return (
          <div>
            <img
              key={id}
              src={process.env.PUBLIC_URL + src}
              alt={'image of ' + name}
            />
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
