import React from 'react';
import SideMenu from '../components/SideMenu';
import Headers from '../components/Headers';
import PageHeader from '../components/pageHeader';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import './App.css';
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
const theme = createMuiTheme({
  palette: {
    primary:{
      main:'#333996',
      light: '#3c44b126'
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526'
    },
    background: {
     default:'#f4f5fd'
    },
    shape: {
      borderRadious: '12px'
    }
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'traslateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})
const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme} >
      <SideMenu/>
      <div className={classes.appMain}>
      <Headers/>
      <PageHeader title="Page header"
      subTitle="Page Description"
      Icon = {<PersonOutlineIcon fontSize="large"/>}/>
     </div>
     <CssBaseline/  >
    </ThemeProvider>
  );
}

export default App;
