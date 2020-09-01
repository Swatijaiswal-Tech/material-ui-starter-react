import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core';


export  function UseForm(initialFValues) {
    const [values, setValues] = useState(initialFValues);
    const handleInputChange = e => {
       const {name , value} = e.target
       setValues({
           ...values,
           [name]: value,
       })
      
    }
    return {
       values,
       setValues,  
       handleInputChange
    }
}

const useStyle = makeStyles(theme => ({
    root: {
     '& .MuiFormControl-root': {
         width: '80%',
         margin: theme.spacing(1)
     }
    }
}))
export  function CustomForm(props) {
    const classes = useStyle();
    return (
        <div>
            <form className={classes.root}>
                {props.children}
             </form>   
        </div>
    )
}
