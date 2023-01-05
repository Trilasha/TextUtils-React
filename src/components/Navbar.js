//typing rfc since we need a react function based component
import PropTypes from 'prop-types'
// impt then Enter
// import { Link } from 'react-router-dom'



import React from 'react'

export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    {/* we are going to make the above string entirely as javascript string */}
    {/* we are also using backticks so that we can use template literals */}
    {/* also the usage of dollar */}
    <div className="container-fluid">
      {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>

          {/* <li className="nav-item"> */}
            {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
             {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
          {/* </li> */}


        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
      </div>
      </div>
    </div>
  </nav>
  
  
      
  )
}



// don't make the p capital
//now suppose if we pass {3} instead of a string in title then an erro messsage will be 
//now suppose if we pass {3} instead of a string in title then an erro messsage will be displayed int he console
//since the proptypes have been set by us so it follows that 
//this type of check is gven to void any kind fo fault in the future 



Navbar.propTypes = {title: PropTypes.string,
                 aboutText: PropTypes.string
}


//we can also set DEFAULT PROPS
//when we havenot passed the props value so by default 
//the values written below would appear
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About the text'
}




/*
suppose default props are also not set
and also written something like title: PropTypes.string.isRequired
then not passing any propvalue will throw error
//it is made ot make sure nothing goes undefined 

 */