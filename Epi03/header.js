import React from "react"
import ReactDOM from "react-dom"

import logo from "./loho-new-.png"
import user from "./user-profile-icon.jpg"

const Logo = () => (
  <div className="logo-left">
    <a href="/">
      <img src={logo} alt="Logo" />
    </a>
  </div>
)

const SearchBar = () => (
  <div className="searchbar">
    <input type="text" placeholder="Search..." />
  </div>
)

const User_Icon = () => (
  <div className="user-icon">
    <a href="/signin">
      <img src={user} alt="User Icon" />
      Sign In
    </a>
    <a href="/login">Login</a>
    <a href="/About">About</a>
    <a href="/Contact">Contact</a>
  </div>
)

const Header = () => (
  <div className="header-wrapper">
    <Logo />
    <SearchBar />
    <User_Icon />
  </div>
)

const root3 = ReactDOM.createRoot(document.getElementById("root3"))

root3.render(<Header />)
