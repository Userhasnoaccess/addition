import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
  var[name,setname] = useState("rat")
  const changename=()=>{
    console.log("btn clicked");
    setname("tom")
  }
  return (
    <div>
      <Typography variant='h4'>my name is {name}</Typography>
      <Button variant='contained' onClick={changename}>change</Button>
    </div>
  )
}

export default State
