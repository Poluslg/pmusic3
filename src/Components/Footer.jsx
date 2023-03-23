import React from 'react'
import Currenttrack from './Currenttrack'
import PlayerControls from './PlayerControls'

function Footer() {
  return (
    <div className='footercontainer'>
      <Currenttrack/>
      <PlayerControls/>
    </div>
  )
}

export default Footer
