import React from 'react'
import {Paper, Card , Typography, makeStyles} from '@material-ui/core';
const useStyle = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
    PageHeader: {
     padding: theme.spacing(4),
     display: 'flex',
     marginBottom: theme.spacing(2)
    },
    pageIcon: {
      display: 'inline-block',
      padding: theme.spacing(2),
      color: '#3c44b1'
    }, 
    pageTitel: {
        paddingLeft: theme.spacing(4),
        '& MuiTypography-subtitle2': {
            opacity: '2.6'
        }
    }
}))
export default function PageHeader(props) {
    const {title , subTitle , Icon} = props;
    const classes = useStyle();
    return (
      
    <Paper elevation={0}  square className={classes.root}>
        <div className={classes.PageHeader}> 
        <Card className={classes.pageIcon}>
            {Icon}
          </Card>
          <div className={classes.pageTitel}>
          <Typography
           variant="h6"
           component="div">
               {title}
          </Typography>
          <Typography
           variant="subtitle2"
           component="div">
               {subTitle}
          </Typography>
          </div>
        </div>
     </Paper>   
      
      
    )
}
