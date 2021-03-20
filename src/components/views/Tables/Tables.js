import React from 'react';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>

    <Button variant='outlined' size='small' color='secondary'>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}> new booking </Link>
    </Button>

    <Button variant='outlined' size='small' color='secondary'>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}> booking id </Link>
    </Button>

    <Button variant='outlined' size='small' color='secondary'>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}> new event </Link>
    </Button>

    <Button variant='outlined' size='small' color='secondary'>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}> event id </Link>
    </Button>
    
  </div>
);

export default Tables;