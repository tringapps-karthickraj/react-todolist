import React,{useState,useEffect}  from 'react';
import {TextField, Grid,Button} from '@mui/material';

export default function AddTask() {
    const[task,setTask]=useState('');
  return (
    <div>
        <Grid container spacing={3}>
  <Grid item xs={8}>
  <TextField id="standard-basic" value={task} onChange={(event)=>setTask(event.target.value)}  multiline label="Standard" variant="standard" />
  </Grid>
  <Grid item xs={4}>
    
  </Grid>
</Grid>
         
    </div>
  )
}
