import React, { useEffect } from 'react'
import axios from 'axios'
import VideoItem from './VideoItem';

function VideoList({searchprops, dataprops, setdataprops, setvideoprops, debounceprops, setdebounceprops}) {

    const KEY = "AIzaSyCIcDkgda5ULK9qG-eHlJqCK4fQlNXGFw4"

    useEffect(()=>{
      const timer = setTimeout(() => {
        setdebounceprops(searchprops)

      }, 2500);
      return ()=>{
        clearTimeout(timer)
      }
    },[searchprops])

    useEffect(()=>{
      let ytsearch =async()=>{
          await axios.get('https://youtube.googleapis.com/youtube/v3/search',{
            params: {
              part: "snippet",
              maxResults: 5,
              key: KEY,
              q: debounceprops,
            },
          }).then(videodata=>{
            console.log(videodata?.data?.items)
            setdataprops(videodata?.data?.items)
          })
      }  
      if(searchprops){
        ytsearch()
      }
    },[debounceprops])



  return (
    <div>
      <ul className="list-group" style={{backgroundColor:"gray",textAlign:'center',fontSize:"20px"}}>
        <h1>There are {dataprops.length} results</h1>
{
  dataprops.map((ele,index)=>{
    return <VideoItem
    key={index}
            eleprops={ele}
            setvideoprops={setvideoprops}
            />
  })
}

      </ul>
    </div>
  )
}

export default VideoList