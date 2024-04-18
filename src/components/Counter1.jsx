import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownward';

const Counter1 = () => {
    var[count,setCount] =useState(0);

    const increment =()=>{
    setCount(count+1)
}
const decrement=()=>{
    setCount(count-1)
}

  return (
    <div style={{margin:'10%'}}>
      <Typography variant='h4'>{count}</Typography>
      <br></br>
      <Button onClick={increment}><ArrowUpwardTwoToneIcon></ArrowUpwardTwoToneIcon></Button>
      <Button onClick={decrement}><ArrowDownwardTwoToneIcon></ArrowDownwardTwoToneIcon></Button>
    </div>
  )
}

export default Counter1
