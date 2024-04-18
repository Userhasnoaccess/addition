import { Button, TextField, Typography } from '@mui/material'
import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

const Mew = () => {
    var[input,setInput] = useState();
    var[data,setData] =useState();

    const inputHandler =(e)=>{
    console.log(e.target.value);
    setInput(e.target.value)
}
const addname=()=>{
  setData(input)
}
  return (
    <div style={{margin:'10%'}}>
        <Typography variant='h3'>{data}</Typography>
        <TextField
        onChange={inputHandler}
         variant='outlined'
        label="enter your name"/>
        <br></br>
        <br></br>
        <Button variant='outlined' onClick={addname}>login</Button>
          
    </div>
  )
}

export default Mew
