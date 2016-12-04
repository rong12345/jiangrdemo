import React, { PropTypes } from 'react'
import { Link } from 'react-router';

class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
        <Link to='/'>Home</Link>
        <Link to='blog'>Blog</Link>
        <Link to='work'>Work</Link>
        <Link to='about'>About</Link>
      </div>
    )
  }
}

export default NavFooter;
