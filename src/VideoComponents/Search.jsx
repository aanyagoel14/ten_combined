import React from 'react'


function Search({searchprops,setSearchprops}) {
    const handlesearch =(e)=>{
        setSearchprops(e.target.value)
    }
      return (

        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Search</span>
  <input
   type="text"
    value={searchprops} 
    class="form-control" 
    placeholder="Search video" 
    onChange={(e)=>setSearchprops(e.target.value)}
    // onChange={handlesearch}
    aria-label="Username" aria-describedby="basic-addon1"/>
</div>

  )
}

export default Search