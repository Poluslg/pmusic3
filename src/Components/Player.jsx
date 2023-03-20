import React, { useState, useRef, useEffect } from "react";
import Songcontrols from "./Songcontrols"
import Songdetails from "./Songdetails"
import VolumeControl from "./VolumeControl";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ismuteSong, setIsMuteSong] = useState(false); // corrected typo in state variable name
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  useEffect(() => {
    if (ismuteSong) {
      audioEl.current.muted = true; // corrected method name for muting
    } else {
      audioEl.current.muted = false; // corrected method name for unmuting
    }
  },)

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };





  return (
    <div className="c-player">
      <h4>Playing now</h4>
      <Songdetails song={props.songs[props.currentSongIndex]} />
      <Songcontrols
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
        ismuteSong={ismuteSong}
        setIsMuteSong={setIsMuteSong}
      />
      <audio
        className="c-player--audio"
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
        controls
      ></audio>
      <p>
        Next up:{" "}
        <span>
          {props.songs[props.nextSongIndex].title} by{" "}
          {props.songs[props.nextSongIndex].artist}
        </span>
      </p>

    </div>
  );
}

export default Player;