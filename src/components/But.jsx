import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const But = () => {
    var[name,setName]=useState();
    const changeName=()=>{
        setName("welcome to gallery")
    }
    const addName=()=>{
        setName("welcome to home")
    }

    const inputHandler=()=>{
        setName("welcome to conatct us")
    }
  return (
    <div style={{margin:'5%'}}>
      <Typography variant ='h4'>{name} </Typography>
      <Button variant='contained' color="info" onClick={changeName}>gallery</Button>&nbsp;
      <Button variant='contained'  color="secondary" onClick={addName} >home</Button>&nbsp;
      <Button variant='contained' color='warning' onClick={inputHandler}>contact us</Button>&nbsp;

    </div>
  )
}

export default But
