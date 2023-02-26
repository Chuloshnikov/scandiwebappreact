import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';



const BasketMain = ({ goods, checkedItemIds, setCheckedItemIds }) => {


  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Check:</TableCell>
            <TableCell>Product:</TableCell>
            <TableCell align="right">SKU:</TableCell>
            <TableCell align="right">Name:</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {goods.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <Checkbox type="checkbox" 
                checked={checkedItemIds.includes(row.id)}
                onChange={()=> setCheckedItemIds(prevCheckedItemIds => prevCheckedItemIds.includes(row.id) ?
                  prevCheckedItemIds.filter(id => id !== row.id) : [ ...prevCheckedItemIds, row.id ]
                  
                  )}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.productType}
              </TableCell>
              <TableCell align="right">{row.sku}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.price}$</TableCell>
            </TableRow>
          
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasketMain