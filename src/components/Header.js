import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <h1> Help Queue</h1>
          <button> 
          <Link className = "link" to="/">Home</Link>
          </button>
          <button>         
          <Link className = "link" to="/sign-in">Sign In</Link>
          </button>

    </React.Fragment>
  );
}

export default Header