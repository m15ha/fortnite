import React from "react";

export default function Header() {
  return (
    <nav className="light-blue darken-1">
      <div className="nav-wrapper">
        <a href="!#" className="brand-logo">
        Fortnite shop 
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="!#">Home</a>
          </li>
          <li>
            <a href="!#">About</a>
          </li>
          <li>
            <a href="!#">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}