import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'   // useLoaction Hook reacr rputer dom mein rehta hai

const Navbar = () => {

  let location = useLocation();    // useLocation hook(jo ki react router dom ke andar hota hai) ki madad se hum jis bhi route par honge uska pathname wagerh grab kar paayenge....aur fir use click karne par manipulate kar sakte hai jaise class active add hogi jab about par click karoge aur add hogi home par jab home ya route / par click karoge
  useEffect(() => {
    console.log(location);   //object like this {pathname: '/about', search: '', hash: '', state: undefined, key: 'na672t'} is seen in console
    console.log(location.pathname);    // /about Or /
  }, [location]);   // location par depend hai useEffect, which means jab bhi location change hogi to useEffect hook chalega

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">iNotebook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/"? "about": ""}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about"? "about": ""}`} to="/about">About</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}


export default Navbar
