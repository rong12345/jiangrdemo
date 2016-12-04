import React, { PropTypes } from 'react'

class ShowGit extends React.Component {
  render () {
    let info = this.props.gitInfo;
    let styles={
      img:{
        width:'100%',
        maxWidth:'130px',
        borderRadius: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.55) 0px 3px 10px'
      }
    }
    return(
      <div>
        <img src={info.avatar_url} style={styles.img}/>
        <h3>{info.login}</h3>
        <div className='show-git'>
          <p>followers<br/>{info.followers+100}</p>
          <p>following<br/>{info.following+100}</p>
          <p>public_repos<br/>{info.public_repos+100}</p>
        </div>
      </div>
    )
  }
}

export default ShowGit;
