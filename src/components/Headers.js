import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { IconButton, Badge, InputBase, makeStyles } from '@material-ui/core';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor:'#fff',
        transform: 'translateZ(0)'
    },
    searchInput: {
        opacity: '0.6',
        padding: 'opx 8px',
        fontsize: '0.8rem',
        '&:hover': {
        backgroundColor :'blue'

        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        },
       
}
}))
export default function Headers() {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
        <Toolbar >
        <Grid container >
            <Grid item  >
             
                <InputBase 
                 placeholder="Search Topics"
                 startAdornment={<SearchIcon 
                 className={classes.searchInput}/>}/>
             </Grid>    
             <Grid item sm> </Grid>
             <Grid item>
                 <IconButton>
                     <Badge badgeContent={4} color="secondary"> <NotificationsNoneIcon/></Badge>
                 </IconButton>

                 <IconButton>
                     <Badge badgeContent={3} color="primary"> <ChatBubbleOutlineIcon/></Badge>
                 </IconButton>
                 <IconButton>
                     <PowerSettingsNewIcon/>
                 </IconButton>
             </Grid> 
         </Grid>
        </Toolbar>
      </AppBar>
    )
}
