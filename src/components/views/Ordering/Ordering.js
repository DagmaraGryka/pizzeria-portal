import React from 'react';
import styles from './Ordering.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


//import Paper from '@material-ui/core/Paper';
import { Table, TableHead, TableRow, TableCell, TableBody, } from '@material-ui/core';


const rows = [ // ? 
  { id: 1, tableId: '1', name: 'ORDER', status: 'READY', orderTime: '13:30', summary: '40' },
  { id: 2, tableId: '2', name: 'ORDER', status: 'DELIVERED', orderTime: '10:00', summary: '35' },
  { id: 3, tableId: '3', name:  'ORDER', status: 'READY', orderTime: '13:30', summary: '100' },
  { id: 4, tableId: '4', name: 'ORDER', status: 'ORDERING', orderTime: '13:45', summary: '220' },
  { id: 5, tableId: '5', name: 'ORDER', status: 'DELIVERED', orderTime: '16:00', summary: '250' },
  { id: 6, tableId: '6', name: 'ORDER', status: 'READY', orderTime: '13:55', summary: '220' },
  
];

const Ordering = () => (
  <div className={styles.component}>
    <h2>Ordering view</h2>

    
      <Table>
          <TableHead >
            <TableRow>
              <TableCell>
                <Button variant="contained" color="secondary" size="small"  >
                  <Link to={process.env.PUBLIC_URL + '/ordering/new'} >New Order</Link>
                </Button>
                <Button variant="contained" color="secondary" size="small"  >
                  <Link to={process.env.PUBLIC_URL + '/ordering/order/123abc'} >Order Id</Link>
                </Button>
              </TableCell>
              <TableCell  align="center">TABLE NUMBER</TableCell>
              <TableCell  align="center">STATUS</TableCell>
              <TableCell  align="center">ORDER TIME</TableCell>
              <TableCell  align="center">SUMMARY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} style={`${row.status}` === 'READY' ? { background: '#e91e63' } : { background: '#ed4b82' }}>
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
    
    
  );

  </div>
);

export default Ordering;