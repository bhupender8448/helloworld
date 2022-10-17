import { Button } from '@mui/material'
import React from 'react'
import MovieTwoToneIcon from '@mui/icons-material/MovieTwoTone';
import LinearProgress from '@mui/material/LinearProgress';

function Upload() {
  return (
    <div className="upload-btn">
      <Button variant="outlined" fullWidth startIcon={<MovieTwoToneIcon/>}component="label" style={{marginTop:'0.5rem'}}>
        <input type="file" accept="image/*" style={{display:'none'}}/>
        Upload
      </Button>
      <LinearProgress variant="determinate" value={50} style={{marginTop:"0.2rem"}}/>
    </div>
  )
}

export default Upload
