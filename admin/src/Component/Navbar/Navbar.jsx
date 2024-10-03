import './Navbar.css'

import navlogo from '../../assets/five-stars.png'
import navProfile from '../../assets/my portfolio.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} className='nav-logo' alt='Five Star Logo'/>
      <h1 className='nav-title'>Urban Nest</h1>
      <img src={navProfile} className='nav-profile' alt='Profile'/>
    </div>
  )
}

export default Navbar
