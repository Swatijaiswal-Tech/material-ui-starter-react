
import React from 'react';
import EmployeeForm from './EmployeeForm';
import PageHeader from '../../components/pageHeader';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    }
}))
export default function EmployeeData() {
    const classes = useStyle();
    return (
        <>
        <PageHeader title="New Employee"
        subTitle="Form Design with validation"
        Icon = {<PersonOutlineIcon fontSize="large"/>}/>
        <Paper className={classes.pageContent}>
        <EmployeeForm/>
        </Paper>
        </>
    )
}