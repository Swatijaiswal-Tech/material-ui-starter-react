import React , {useState , useEffect} from 'react';
import { TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import {UseForm ,CustomForm }from '../../components/useForm';


const initialFieldvalues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: '',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}
export default function EmployeeForm() {

    const {values , setValues , handleInputChange}= UseForm(initialFieldvalues)
  

    return (
        <CustomForm>
            <Grid container>
                <Grid item xs={6}> 
                <TextField
                variant= "outlined"
                label="fullName"
                name="fullname"
                value={values.fullName}
                onChange={handleInputChange}/> 
                </Grid>
                <Grid item xs={6}> 
                <TextField
                variant= "outlined"
                label="Email"
                name="email"
                value={values.email}/> 
                </Grid>
                <Grid item xs={6}> 
                 <FormControl>
                     <FormLabel>Gender </FormLabel>
                     <RadioGroup raw="true"
                      name="gender"
                      value={values.gender}
                      onChange= {handleInputChange}> 
                         <FormControlLabel value="male" control={<Radio/>} label="male"> </FormControlLabel>
                         <FormControlLabel value="female" control={<Radio/>} label="female"> </FormControlLabel>
                         <FormControlLabel value="others" control={<Radio/>} label="other"> </FormControlLabel>
                     </RadioGroup>
                  </FormControl>    
                </Grid>
              </Grid>  
         </CustomForm>   
    )
}

