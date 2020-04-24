import React, { Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Redirect} from 'react-router-dom';



class Header extends  Component {
  constructor(props){
    super(props);
    this.state={
      navigate : false
    }
    // this.logout=this.logout.bind(this)
  }
  
  // componentWillMount(){
  //   if(sessionStorage.getItem("token")){
  //     console.log("session is present");
  //   }
  //   else{
  //     this.setState({ navigate : true });
  //   }
  // }

  // logout() {
  //   sessionStorage.setItem("token","");
  //   sessionStorage.clear();
  // }
  

  render(){
    
    // if (this.state.navigate){
    //   return <Redirect to={"/login"} push={true} />
    // }
    return (
      <div>
        <AppBar  color="default">
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
              News
            </Typography>
            <Button type="button" onClick={this.logout} color="inherit">logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
