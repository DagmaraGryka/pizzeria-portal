import React from 'react';
import styles from './Ordering.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Table, TableHead, TableRow, TableCell, TableBody, } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const rows = [
  { tableId: '1', name: 'ORDER', status: 'READY', orderTime: '13:30', summary: '40' },
  { tableId: '2', name: 'ORDER', status: 'DELIVERED', orderTime: '10:00', summary: '35' },
  { tableId: '3', name:  'ORDER', status: 'READY', orderTime: '13:30', summary: '100' },
  { tableId: '4', name: 'ORDER', status: 'ORDERING', orderTime: '13:45', summary: '220' },
  { tableId: '5', name: 'ORDER', status: 'DELIVERED', orderTime: '16:00', summary: '250' },
  { tableId: '6', name: 'ORDER', status: 'READY', orderTime: '13:55', summary: '220' },
];

const Ordering = () => (
  <div className={styles.component}>
    <h2>Ordering view</h2>

    <Table>
      <TableHead >
        <TableRow>
          <TableCell>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="outlined" color="secondary" size="small"  >
                  <Link to={process.env.PUBLIC_URL + '/ordering/new'} >New Order</Link>
                </Button>
              </Grid>

              <Grid item>
                <Button variant="outlined" color="secondary" size="small"  >
                  <Link to={process.env.PUBLIC_URL + '/ordering/order/123abc'} >Order Id</Link>
                </Button>
              </Grid>
            </Grid>
          </TableCell>
          <TableCell  align="center">TABLE NUMBER</TableCell>
          <TableCell  align="center">STATUS</TableCell>
          <TableCell  align="center">ORDER TIME</TableCell>
          <TableCell  align="center">SUMMARY</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.tableId} style={`${row.status}` === 'READY' ? { background: '#e91e63' } : { background: '#ed4b82' }}>
            <TableCell align="left">
              <Button variant="contained" color="primary" size="small">
                <Link to={process.env.PUBLIC_URL + '/ordering/new'} style={{ textDecoration: 'none'}}>
                  {row.name}
                </Link>
              </Button> 
            </TableCell>
            <TableCell align="center" >{`${row.tableId}`}</TableCell>
            <TableCell align="center" >{`${row.status}`}</TableCell>
            <TableCell align="center" >{`${row.orderTime}`}</TableCell>
            <TableCell align="center" >{`${row.summary}`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default Ordering;