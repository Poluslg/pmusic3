import React from 'react'
import Header from './Header'

function Library() {
  return (
    <>
        <Header/>
        <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Library
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              <h6>Library</h6>
          </div>
        </main>
      </div>
    </>
  )
}

export default Library
