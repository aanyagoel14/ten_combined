import React from 'react'

function VideoDetail({videoidprop}) {
    
  return (
    <div className="main">

<iframe width="820" height="415"
src={`https://www.youtube.com/embed/${videoidprop}`}>
</iframe>
<h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A qui magni id! Nesciunt incidunt architecto nisi odio beatae eum quisquam.</p>

  </div>
  )
}

export default VideoDetail