import React, { useState } from 'react'
import Search from './Search'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'


function VideoMain() {

  const [search,setSearch] = useState('')
  const [debounce, setDebounce]=useState(search)
  const [data,setData] = useState([])
  const [videoId,setVideoId] = useState('')

  return (
    <>
    <Search 
    setSearchprops={setSearch}
     searchprops = {search}/>
    <div style={{display:'flex'}}>
    
    {
      videoId &&   <VideoDetail
      videoidprop={videoId}/>
    }

{
  search &&       <VideoList
  searchprops={search}
  dataprops={data}
  setdataprops={setData}
  debounceprops={debounce}
  setdebounceprops={setDebounce}
  setvideoprops={setVideoId}
  />
  
}
    </div>

    

    </>

  )
}

export default VideoMain