import React, { useState } from "react";


function VolumeControl() {
  const [volume, setVolume] = useState(50); // default volume set to 50
  
  function increaseVolume() {
    if (volume < 100) { // volume can't exceed 100
      setVolume(volume + 10); // increase volume by 10
    }
  }
  
  function decreaseVolume() {
    if (volume > 0) { // volume can't go below 0
      setVolume(volume - 10); // decrease volume by 10
    }
  }

  return (
    <div className="volume-control-container">
      <h2 className="volume-control-heading">Volume Control</h2>
      <p className="volume-control-value">Current Volume: {volume}%</p>
      <button className="volume-control-button" onClick={decreaseVolume}>Decrease Volume</button>
      <button className="volume-control-button" onClick={increaseVolume}>Increase Volume</button>
    </div>
  );
}

export default VolumeControl;
