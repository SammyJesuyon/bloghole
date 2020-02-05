import React from 'react';
import Sidebar from '../Sidebar';
import './style.css'

const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
        {props.children}
        <Sidebar />
    </div>
    <div>
        <footer><div class="footer-copyright">
          <div class="container">
            © 2020 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div></footer>
    </div>
      </React.Fragment>
    
   )

 }

export default Layout