import React from "react";
import propTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props){
  // const myStyle =(props)=> {
  //    if(props.mode==="light"){
  //     {color:'white'}
  //    }else{
  //     color:'black'
  //    }
  // }
    return(
        <div>
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" >{props.title} </Link>
                {/* <a className="navbar-brand" href="#" >{props.title} </a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">{props.About} </Link>
                  {/* <a className="nav-link" href="/about">{props.About} </a> */}
                 </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <div className={`form-check form-switch mx-2 text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input"onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label>{props.mode==='light'?'Enable DarkMood':'Enable LightMood'} </label>
              </div>
             </div>
            </div>
          </nav>
        </div>
    )
   
}
Navbar.propTypes = {
  title : propTypes.string,
  About : propTypes.string
}
Navbar.defaultProps = {
  title: 'TextUtils'
}