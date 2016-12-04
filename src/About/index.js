import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

import Loading from '../component/Loading';
import ShowGit from '../component/ShowGit';
import echarts from 'echarts';

class About extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      // 0 没搜索， 1 后台还没响应数据为接收 2 数据接收完
      wait:0
    }
  }
  handleSubmit(e){
    e.preventDefault();
    this.setState({
      wait:1
    })
    let value = this.refs.gitname.getValue();
    axios.get(`https://api.github.com/users/${value}`)
      .then( res => this.setState({data:res.data,wait:2}) )
      .catch( error => {alert(error);this.setState({wait:0})} )
    this.refs.form.reset()
  }
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
      title: {
        text: '我的技能展示',
        textStyle:{
          color: 'teal'
        },
        left:'center'
      },
      tooltip: {},
      xAxis: {
          data: ['html','css','js','react','node','mongodb']
      },
      yAxis: {},
      series: [{
          name: '熟练度',
          type: 'bar',
          data: [90, 95, 85, 80, 70, 60]
      }]
    });
  }
  render(){
    let showGitinfo = this.state.wait==0 ? null :
      this.state.wait==1 ? <Loading /> : <ShowGit gitInfo={this.state.data} />

    return(
      <div className='about-wrap'>
        <div className='git-card'>
          <h2>Search Git Info</h2>
          <form ref='form' className='about-form' onSubmit={this.handleSubmit.bind(this)}>
            <TextField style={{width:'60%'}} ref='gitname' hintText="github name" />
            <RaisedButton onClick={this.handleSubmit.bind(this)} label="search" secondary={true} style={{marginLeft:'10px'}}/>
          </form>
          {showGitinfo}
        </div>
        <div id='main' style={{width:'100%',height:'500px',maxWidth:'600px',margin:'0 auto'}}></div>
      </div>
    )
  }
}

export default About;
// import React, { PropTypes } from 'react'
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
// import axios from 'axios';
//
// import Loading from '../component/Loading';
// import ShowGit from '../component/ShowGit';
//
// class About extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       data:{},
//       // 0 没搜索， 1 后台还没响应数据为接收 2 数据接受完
//       wait:0
//     }
//   }
//   handleSubmit(e){
//     e.preventDefault();
//     this.setState({
//       wait:1
//     })
//     let value = this.refs.gitname.getValue();
//     axios.get(`https://api.github.com/users/${value}`)
//       .then( res => this.setState({data:res.data,wait:2}) )
//       .catch( error => {alert(error);this.setState({wait:0})} )
//     this.refs.form.reset()
//   }
//
//   render () {
//     let showGitinfo = this.state.wait==0 ? null :
//     this.state.wait==1 ? <Loading /> : <ShowGit gitInfo={this.state.data} />
//
//     return(
//       <div className='about-wrap'>
//         <div className='git-card'>
//           <h2>Search Git Info</h2>
//           <form ref='form' className='about-form' onSubmit={this.handleSubmit.bind(this)}>
//             <TextField style={{width:'60%'}} ref='gitname' hintText="github name" />
//             <RaisedButton onClick={this.handleSubmit.bind(this)} label="search" secondary={true} style={{marginLeft:'10px'}}/>
//           </form>
//           {showGitinfo}
//         </div>
//       </div>
//     )
//   }
// }
//
// export default About;
