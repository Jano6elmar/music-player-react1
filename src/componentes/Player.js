import React, { useState, useRef, useEffect } from 'react';
import Controles from './Controles';



function Player(props) {
    const audioElement = useRef(null); //para acceder a la <audio>
    const [isPlaying, setIsPlaying] = useState(0);
    const songsURL = "https://assets.breatheco.de/apis/sound/";

    useEffect(() => {
        if (isPlaying) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    });

    const nextSong = () => {
        if (isPlaying !== props.songs.length - 1) {
            audioElement.current.src = songsURL + props.songs[isPlaying + 1].url;
            setIsPlaying(isPlaying + 1);
        } else {
            setIsPlaying(0)
            audioElement.current.src = songsURL + props.songs[0].url
        }

    }

    const prevSong = () => {
        if (isPlaying !== 0) {
            audioElement.current.src = songsURL + props.songs[isPlaying - 1].url;
            setIsPlaying(isPlaying - 1);
        } else if (isPlaying === 0) {
            audioElement.current.src = songsURL + props.songs[props.songs.length - 1].url;
            setSongActive(props.songs.length - 1);
        }
    }

    const mapSongs = props.songs.map((item1, i) =>
        <li className="action d-flex justify-content-between list-group-item list-group-item-action"
            key={i} onClick={() => { props.setCurrentSongIndex(i); { audioElement.current.src = songsURL + item1.url } }}> {item1.name} </li>)

    return (
        <div className="c-player">
            <audio autoPlay ref={audioElement}></audio>
            <h2>React Music Player</h2>
            <div className="listadecanciones">
                <div className="listadecanciones2">
                    <ul>
                        {
                            mapSongs
                        }
                    </ul>
                </div>
            </div>
            <Controles
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                nextSong={nextSong}
                prevSong={prevSong} />
        </div>
    )
}

export default Player

