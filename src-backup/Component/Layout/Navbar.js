import react from "react";
import { NavLink } from "react-router-dom";
const Navbar = ()=>{
    return(
        <>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
   <a className="navbar-brand" href="#">Navbar</a>
   <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
   >
      <span className="navbar-toggler-icon"></span>
   </button>

   <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
         <li className="nav-item active">
         <NavLink className="nav-link" to="/home">Home <span className="sr-only"></span></NavLink>
         </li>
         <li className="nav-item">
   <NavLink className="nav-link" to="/Aboutus">About Us</NavLink>
 </li>

 <li className="nav-item">
   <NavLink className="nav-link" to="/Contact">Contact Us</NavLink>
 </li>
        
       
      </ul>
      
   </div>
   </div>
</nav>

        
        </>
    )
}

export default Navbar;