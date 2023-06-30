import React from 'react'
import './navbar.css'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div>
        <h2>
           <ul className="login-menu">
            <li>
            <h4><Link href="/">Logo</Link></h4>
            </li>
            <li>
                <Link href='/login'>Login</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
            <li>
                <Link href='/contacts'>Contacts</Link>

            </li>
            <li>
                <Link href='/client'>Client</Link>
            </li>
           </ul>
           </h2> 
           
    </div>
  )
}

export default NavBar
