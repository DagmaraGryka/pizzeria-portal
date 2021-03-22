import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const PageNav = () => (
  <nav>
    <Grid container spacing={2} justify="center">
    <Button variant='contained' size='small' color='secondary'>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName="active"> Dashboard </NavLink>
    </Button>

    <Button variant='contained' size='small' color='secondary'>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName="active"> Login </NavLink>
    </Button>

    <Button variant='contained' size='small' color='secondary'>
      <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName="active"> Tables </NavLink>
    </Button>

    <Button variant='contained' size='small' color='secondary'>
      <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName="active"> Ordering </NavLink>
    </Button> 

    <Button variant='contained' size='small' color='secondary'>
      <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName="active"> Kitchen </NavLink>
    </Button>
    </Grid>
  </nav>
);

export default PageNav;