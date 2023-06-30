
import './App.css';
import React, { useState } from 'react';

const updatedMovies = {
  movie4: ['Volume 1', 'Volume 2'],
  movie5: ['Volume 1', 'Volume 2', 'Volume 3'],
  movie6: ['Volume 1'],
  movie7: ['Volume 1', 'Volume 2'],
  movie8: ['Volume 1', 'Volume 2', 'Volume 3'],
  movie9: ['Volume 1'],
  movie10: ['Volume 1', 'Volume 2'],
};

const App = () => {
  const [movieIndex, setMovieIndex] = useState(4);

  const handleClick = () => {
    setMovieIndex((prevIndex) => {
      if (prevIndex === 10) {
        return 4;
      }
      return prevIndex + 1;
    });
  };
  const currentMovie = `movie${movieIndex}`;
  const volumes = updatedMovies[currentMovie] || [];

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        <li>
          <strong>{currentMovie}</strong>
          <ul>
            {volumes.map((volume) => (
              <li key={volume}>{volume}</li>
            ))}
          </ul>
        </li>
      </ul>
      {/* <button onClick={handleClick}>Next Movie</button> */}


      <button onClick={() => handleClick()}>Next Movie</button>

    </div>
  );
};

export default App;
