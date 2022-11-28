import React, { useRef } from "react"
import { FaBars } from "react-icons/fa"
import "../components/NavbarStyles.css"

const Navbar = () => {
    const navRef = useRef()

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }

    return(
        <header>
            <div className="navbar-left">
               <h3>Logo</h3> 
               <p>Acting as admin</p>
            </div>
            <nav ref={navRef}>
                <a href="/">Home</a>
                <a href="/">Teams</a>
                <a href="/">User</a>
                <a href="/">Logout</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaBars/></button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}><FaBars/></button>
        </header>
    )
}

export default Navbar