import React from 'react'
import Header from './Header'

function Playlist() {
  return (
    <>
        <Header/>
        <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Your Playlist
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <h6>Playlist</h6>
          </div>
        </main>
      </div>
    </>
  )
}

export default Playlist
