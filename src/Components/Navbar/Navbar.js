import React from 'react'
import './Navbar.css'
import '../../App.css'

function Navbar() {
  return (
    <div className='navbar'>
      <a href="#"><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix" /></a>
        <a className='links' href="#">Home</a>
        <a className='links' href="#">Series</a>
        <a className='links' href="#">Movies</a>
        <a className='links' href="#">New & Popular</a>
        <a className='links' href="#">My List</a>
        <a className='avatarside' href="#"><img style={{height: '25px',}} src="https://img.icons8.com/external-febrian-hidayat-gradient-febrian-hidayat/512/external-search-user-interface-febrian-hidayat-gradient-febrian-hidayat.png" alt="" /></a>
        <a className='avatarside avtlinks' href="#">KIDS</a>
        <a className='avatarside avtlinks' href="#">DVD</a>
        <a className='avatarside' href="#"><img style={{height: '25px',}} src="https://img.icons8.com/emoji/512/bell-emoji.png" alt="" /></a>
      <a href="#"><img className='avatar' src="https://img.icons8.com/fluency/512/cat-profile.png" alt="avatar" /></a>
    </div>
  )
}

export default Navbar