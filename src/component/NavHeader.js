import React, { PropTypes } from 'react'
import navimg from './../images/nav.png'

class NavHeader extends React.Component {
  handleBack(){
    this.context.router.goBack();
  }
  render () {
    return(
      <div className="nav-header">
         <button type="button" onClick={this.handleBack.bind(this)}>
          <img src={navimg} className="navimg"/><span>BACK</span>
        </button>

        <h3>JIANGRONG＇s {this.props.title}</h3>
        <button type="button" className="btn btn-default" aria-label="Left Align">
          <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
        </button>
      </div>
    )
  }
}
NavHeader.contextTypes = {
  router: React.PropTypes.object
};
export default NavHeader;
