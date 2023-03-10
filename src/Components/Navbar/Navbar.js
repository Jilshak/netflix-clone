import React from 'react'
import './Navbar.css'
import '../../App.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <a href="#"><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix" /></a>
        <Link to='/home'><a className='links' href="#">Home</a></Link>
        <Link to='/series'><a className='links' href="#">Series</a></Link>
       <Link to='/Movies'> <a className='links' href="#">Movies</a></Link>
        <Link to='/NewAndpopular'><a className='links' href="#">New & Popular</a></Link>
        <Link to='/MyList'><a className='links' href="#">My List</a></Link>
        <a className='avatarside' href="#"><img style={{height: '25px',}} src="https://img.icons8.com/external-febrian-hidayat-gradient-febrian-hidayat/512/external-search-user-interface-febrian-hidayat-gradient-febrian-hidayat.png" alt="" /></a>
        <Link to='/kids'><a className='avatarside avtlinks' href="#">KIDS</a></Link>
        <Link to='/Dvd'><a className='avatarside avtlinks' href="#">DVD</a></Link>
        <a className='avatarside' href="#"><img style={{height: '25px',}} src="https://img.icons8.com/emoji/512/bell-emoji.png" alt="" /></a>
     <Link to='/'> <a href="#"><img className='avatar' src="https://img.icons8.com/fluency/512/cat-profile.png" alt="avatar" /></a></Link>
    </div>
  )
}

export default Navbar