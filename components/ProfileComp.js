import React from 'react'
import Navbar from './Navbar'

function ProfileComp() {
  return (
    <div>
      <Navbar/>
      <div className='profile_upper'>
        <img src="https://m.media-amazon.com/images/M/MV5BOGIwYjZlOTctZTNhOC00OTdiLWI5ZWItOTdiMWRjMjUwMDlhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_.jpg" style={{height:"8rem",width:"8rem",borderRadius:"50%"}}/>
        <div style={{flexBasis:"40%"}}>
            <h1>Name</h1>
            <h3>Posts</h3>
        </div>
      </div>
      <hr/>
      <div className='profile_videos'>
        <video src="http://127.0.0.1:8887/Liggi%20-%20Ritviz%20-%20Dance%20Cover%20-%20RMoves%20Choreography.mp4"/>
        <video src="http://127.0.0.1:8887/Liggi%20-%20Ritviz%20-%20Dance%20Cover%20-%20RMoves%20Choreography.mp4"/>
        <video src="http://127.0.0.1:8887/Liggi%20-%20Ritviz%20-%20Dance%20Cover%20-%20RMoves%20Choreography.mp4"/>
      </div>
    </div>
  )
}

export default ProfileComp
