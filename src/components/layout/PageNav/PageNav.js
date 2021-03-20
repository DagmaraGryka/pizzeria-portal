import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const PageNav = () => (
  <nav>
    <Button variant='outlined' size='small' color='secondary'>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName="active"> Dashboard </NavLink>
    </Button>

    <Button variant='outlined' size='small' color='secondary'>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName="active"> Login </NavLink>
    </Button>

    <Button variant='outlined' size='small' color='secondary'>
      <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName="active"> Tables </NavLink>
    </Button>

    <Button variant='outlined' size='small' color='secondary'>
      <NavLink to={`${process.env.PUBLIC_URL}/ordering`} activeClassName="active"> Ordering </NavLink>
    </Button> 

    <Button variant='outlined' size='small' color='secondary'>
      <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName="active"> Kitchen </NavLink>
    </Button>
  </nav>
);

export default PageNav;