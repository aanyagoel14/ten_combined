import React from 'react'

function VideoItem({eleprops,setvideoprops}) {
  return (
    <>
    <li style={{listStyle:'none'}} onClick={()=>setvideoprops(eleprops?.id?.videoId)} className="list-group-item">
    <div class="card" style={{width: '18rem'}}>
    <img class="card-img-top" src={eleprops?.snippet?.thumbnails?.default.url} alt="Card image cap"/>
    <div class="card-body">
      <p class="card-text">{eleprops?.snippet?.title}</p>
    </div>
  </div>
    </li>
    
    </>
  )
}

export default VideoItem