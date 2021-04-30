import React from 'react'
import characters from './Images';

function GameCards() {
    return (
        <div className='cards'>
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
    )
}
export default GameCards;
