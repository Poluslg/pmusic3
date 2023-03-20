import React, { useEffect, useState } from 'react'
import Header from "./Header";
import Player from "./Player"




function Afterlogin() {
  

  const [songs] = useState([
    {
      title: "NCS 1",
      artis: "NCS",
      img_src: "./rttet.gif",
      src: "https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/songs%2F1.mp3?alt=media&token=e9e0d9c5-f6ac-4e82-8fb6-6f52aa93a78c"
    },
    {
      title: "NCS 2",
      artis: "NCS",
      img_src: "./rttet.gif ",
      src: "https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/songs%2F2.mp3?alt=media&token=c21eddbd-c613-4763-bbb2-09b7c5344cb0"
    },
    {
      title: "NCS 3",
      artis: "NCS",
      img_src: "./rttet.gif ",
      src: "https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/songs%2F3.mp3?alt=media&token=4c92247e-a958-48cf-918e-8c981ad928de"
    },
    {
      title: "NCS 4 ",
      artis: "NCS",
      img_src: "./rttet.gif ",
      src: "https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/songs%2F4.mp3?alt=media&token=b1fc6c17-0bfe-47d4-b8b8-e43a79cd9fdb"
    },
    {
      title: "NCS 5",
      artis: "NCS",
      img_src: "./rttet.gif ",
      src: "https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/songs%2F5.mp3?alt=media&token=d1cb5263-8a35-4d34-83c0-80258f1ed5bc"
    },
    {
      title: "NCS 6",
      artis: "NCS",
      img_src: "./rttet.gif ",
      src: "https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/songs%2F6.mp3?alt=media&token=52e22111-2801-46bf-ac46-c0914678fce2"
    },
    {
      title: "NCS 7",
      artis: "NCS",
      img_src: "./rttet.gif ",
      src: "https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/songs%2F7.mp3?alt=media&token=021deb76-e143-49fd-86e0-607a8c18e9d1"
    },
    {
      title: "NCS 8",
      artis: "NCS",
      img_src: "./rttet.gif ",
      src: "https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/songs%2F8.mp3?alt=media&token=04817aed-6d7f-40b2-8602-7e0b31d92a88"
    },
    {
      title: "NCS 9",
      artis: "NCS",
      img_src: "./rttet.gif ",
      src: "https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/songs%2F9.mp3?alt=media&token=7083024e-978d-4580-9ed1-69a44ba683f2"
    },
    {
      title: "NCS 10",
      artis: "NCS",
      img_src: " ./rttet.gif",
      src: "https://firebasestorage.googleapis.com/v0/b/pmusicplayer-dd673.appspot.com/o/songs%2F10.mp3?alt=media&token=1961e559-80e3-4578-ab0c-d025a9314ce6"
    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (

    <>
      <Header />
      <div className="App">
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
        />
      </div>
    </>
  );
}


export default Afterlogin
