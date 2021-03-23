import React from 'react';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Grid container spacing={2} justify="center">
      <Grid item>
        <Button variant='outlined' size='small' color='secondary'>
          <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`}> new booking </Link>
        </Button>
      </Grid>
    
      <Grid item>
        <Button variant='outlined' size='small' color='secondary'>
          <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}> booking id </Link>
        </Button>
      </Grid>
    
      <Grid item>
        <Button variant='outlined' size='small' color='secondary'>
          <Link to={`${process.env.PUBLIC_URL}/tables/events/new`}> new event </Link>
        </Button>
      </Grid>
    
      <Grid item>
        <Button variant='outlined' size='small' color='secondary'>
          <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}> event id </Link>
        </Button>
      </Grid>
    </Grid>
  </div>
);

export default Tables;