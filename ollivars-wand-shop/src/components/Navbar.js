import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    
  return (
    <nav class="nav navbar-dark bg-dark">
        <div>
            <Link to="/">MainPage</Link>
      </div>
      <div>
      <Link to="WandsList">WandsList</Link>
      </div>
    </nav>
  );
}

export default Navbar;