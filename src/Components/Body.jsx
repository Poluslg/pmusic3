import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStateProvider } from "../utils/StateProvider";
import { AiFillClockCircle } from "react-icons/ai";

export default function Body() {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [ dispatch] = useStateProvider();
  const selectedPlaylistId = "2K9DAxPKgZrA5H5yLWZWk4";
  useEffect(() => {
    const spotifyToken = localStorage.getItem("spotifyToken");
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + spotifyToken,
            "Content-Type": "application/json",
          },
        }
      );
      const _selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a")
          ? ""
          : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };
      setSelectedPlaylist(_selectedPlaylist);
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist })
    };
    getInitialPlaylist();
  }, []);
  const msToMinutesAndSeconds = (ms) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };
  return (
    <div className="ContainerBody">
      {selectedPlaylist && (
        <>
          <div className="playlist">
            <img src={selectedPlaylist.image} alt="selectedplaylist" />
          </div>
          <div className="details">
            <span className="type">PLAYLIST</span>
            <h1 className="title">{selectedPlaylist.name}</h1>
            <p className="description">{selectedPlaylist.description}</p>
          </div>
          <div className="list">
            <div className="header__row">
              <div className="cola">
                <span>TITLE</span>
              </div>
              <div className="colb">
                <span>ALBUM</span>
              </div>
              <div className="colc">
                <span>
                  <AiFillClockCircle />
                </span>
              </div>
            </div>
          </div>
          <div className="tracks">
            {selectedPlaylist.tracks.map(
              (
                {
                  id,
                  name,
                  artists,
                  image,
                  duration,
                  album,
                  context_uri,
                  track_number,
                },
                index
              ) => {
                return (
                  <div
                    className="row"
                    key={id}
                    onClick={() =>
                      playTrack(
                        id,
                        name,
                        artists,
                        image,
                        context_uri,
                        track_number
                      )
                    }
                  >
                    <div className="col">
                      <span>{index + 1}</span>
                    </div>
                    <div className="coldetail">
                      <div className="image">
                        <img src={image} alt="track" />
                      </div>
                      <div className="info">
                        <span className="name">{name}</span>
                        <span>{artists}</span>
                      </div>
                    </div>
                    <div className="col">
                      <span>{album}</span>
                    </div>
                    <div className="col">
                      <span>{msToMinutesAndSeconds(duration)}</span>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </>
      )}
    </div>
  );
}
