import React from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'


export default function Afterlogin() {
  return (
    <div className='Container'>
      <div className="spotify__body">
        <Sidebar />
        <div className="body">
          <Header />
          <div className="body__contents">
            <Body />
          </div>
        </div>
      </div>
      <div className="spotify__footer">
        <Footer />
      </div>
    </div>
  )
}
