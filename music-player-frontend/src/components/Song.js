// FileName: Song.js
import PlayerSong from './PlayerSong';
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlay,
    faAngleLeft,
    faAngleRight,
    faPause,
} from "@fortawesome/free-solid-svg-icons";

import LibrarySong from "./LibrarySong";

const Song = ({ currentSong, songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    setIsPlaying,
    setSongs,
    setSongInfo,
    songInfo,
    setLibraryStatus,
    libraryStatus, }) => {


    return (
        <div className="main-content">
            <div className="left-panel">
                <div className="song-container">
                    <h2>{currentSong.name}</h2>
                    <h3>{currentSong.artist}</h3>
                    <div className="song-cover-wrapper">
                        <div className="song-cover">
                            <img src={currentSong.cover} alt={currentSong.name} />
                        </div>
                    </div>


                  
                </div>


                        <PlayerSong
                            currentSong={currentSong}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            audioRef={audioRef}
                            songs={songs}
                            setCurrentSong={setCurrentSong}
                            setSongs={setSongs}
                            songInfo={songInfo}
                            setSongInfo={setSongInfo}
                        />

            </div>
            <div className="right-panel">
                <div className="above">
                    <p>Your Playlist</p>
                    <button
                        onClick={() => {
                        }}
                    >
                        <h4>+</h4>
                    </button>
                </div>
                <div className="under">
                    {songs.map((song) => (
                        // <div className="library-song" key={song.id}>
                        //     <div className="song-description">
                        //         <h3>{song.name}</h3>
                        //         <h4>{song.artist}</h4>
                        //     </div>
                        // </div>
                        <LibrarySong
                            setSongs={setSongs}
                            isPlaying={isPlaying}
                            audioRef={audioRef}
                            songs={songs}
                            song={song}
                            setCurrentSong={setCurrentSong}
                            id={song.id}
                            key={song.id}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Song;

