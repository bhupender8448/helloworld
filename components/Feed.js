import { Avatar } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Upload from './Upload'
import FavoriteIcon from '@mui/icons-material/Favorite';

function Feed() {
  return (
    <div className="feed-container">
      {/* Navbar*/}
      <Navbar/>
      {/* upload videos */}
      <Upload/>
      {/* reels */}
      <div className="videos-container">
        <div className="post-container">
          <video/>
          <div className="videos-info">
            <div className="avatar_container"><Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{margin:"0.5rem"}}/>
             <p> Name</p>
             </div>
            <div className="post-like"><FavoriteIcon fontSize="large"/>
             10
             </div>
          </div>
      </div>
        
        <div className="post-container">
          <video/>
        </div>
      </div>
    </div>
  )
}

export default Feed
