import React from 'react';
import { IoLibrary } from 'react-icons/io5';
import { MdHomeFilled, MdSearch } from 'react-icons/md';
import Playlists from './Playlists';
export default function Sidebar() {
  return (
    <div className='Container'>
      <div className="top__links">
        <div className="logo">
          <img src="./favicon.ico" alt="PMusiclogo" />
        </div>
        <ul>
          <li>
            <MdHomeFilled/>
            <span>
              Home
            </span>
          </li>
          <li>
            <MdSearch/>
            <span>
              Search
            </span>
          </li>
          <li>
            <IoLibrary/>
            <span>
              Your Library
            </span>
          </li>
        </ul>
      </div>
      <Playlists/>
    </div>
  )
}



