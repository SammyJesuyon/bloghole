import React from 'react';
import '../../App.css'

const Header = (props) => {
  return(
    <div className="header">
        <span className="headerMenu">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
                <div className="right">
          <i class="material-icons">email</i>
                </div>
        </span>
        
    </div>
   )

 }

export default Header