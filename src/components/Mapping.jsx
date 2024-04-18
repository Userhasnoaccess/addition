import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Mapping = () => {
    var data = [
        {name:"rat",age:150,place:"nowhere"},
        {name:"tom",age:15,place:"somewhere"},
    ];
  return (
    <div>
   <TableContainer>
    <Table>
        <TableHead>
        <TableRow>
    <TableCell>name</TableCell>
    <TableCell>age</TableCell>
    <TableCell>place</TableCell>
</TableRow>
        </TableHead>
        <TableBody>
{data.map((val,i)=>{
    return<TableRow key={i}>
        <TableCell>{val.name}</TableCell>
        <TableCell>{val.age}</TableCell>
        <TableCell>{val.place}</TableCell>
    </TableRow>
})}
        </TableBody>
    </Table>
   </TableContainer>
    </div>
  )
}

export default Mapping
