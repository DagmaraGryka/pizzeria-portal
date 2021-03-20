import React from 'react';
import styles from './Ordering.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Ordering = () => (
  <div className={styles.component}>
    <h2>Ordering view</h2>
    
    <Button variant="outlined" size='small' color="secondary">
      <Link to={`${process.env.PUBLIC_URL}/ordering/booking/new`}> new order </Link>
      </Button>
    
    <Button variant="outlined" size='small' color="secondary">
      <Link to={`${process.env.PUBLIC_URL}/ordering/booking/new`}> order id </Link>
    </Button>
    
  </div>
);

export default Ordering;