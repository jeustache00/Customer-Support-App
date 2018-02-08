import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import SidePanel from './SidePanel';
import MainContent from './MainContent';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MyAppBar from './MyAppBar';


class App extends Component {
  

  render() {
    return (
      <div style={{height:'100%', width: '100%', position: 'absolute'}}>

        <MyAppBar/>
        <div>
        
        </div>
        <div style={{ display: 'flex', height: '100%' }}>
          <SidePanel />
          <MainContent />
        </div>
      </div>
    );
  }
}
     


export default App;
