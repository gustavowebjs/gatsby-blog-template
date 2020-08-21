import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex">
          <div>
            <Link to="/" className="brand">
              <span role="img" className="emoji">
                💾
              </span>
              Gustavo Vinícius
            </Link>
          </div>
          <div className="flex">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
