import { useState, useEffect } from 'react'
import Player from './componentes/Player'
import './App.css';




function App() {
  
  const [songs, setSongs] = useState([]);
  
  
  const obtener = () => {
    fetch('https://assets.breatheco.de/apis/sound/songs')
    .then(response => response.json())
    .then(data => {
      setSongs(data)
      console.log(data)
    /* .catch((error)=> {console.log(error)})  */
      
    })
  };
  /* useEffect(() => {
    
    
      
    }, [])
   */
  
  
  
  
  const [currentSongIndex, setCurrentSongIndex] = useState(0); 
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
  
  useEffect(() => {
    obtener();
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <>
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs} />
      <div >
        
      </div>
    </>
  );
}

export default App;
