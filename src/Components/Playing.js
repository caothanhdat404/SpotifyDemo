import React, { useContext } from "react";
import { Songs } from "../Context";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Playing() {
  const { DataSongs, song, handleSetSong } = useContext(Songs);

  const handleClickNext = () => {
    if(song.id + 1 >= DataSongs.length) {
      handleSetSong(0)
    } else {
      handleSetSong(song.id + 1);
    }
  };
  const handleClickPrevious = () => {
    if(song.id - 1 < 0) {
      handleSetSong(DataSongs.length - 1)
    } else {
      handleSetSong(song.id - 1);
    }
  };
  const handleAudioEnd = () => {
    handleClickNext()
  }

  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
        onEnded={handleAudioEnd}
      />
    </div>
  );
}
