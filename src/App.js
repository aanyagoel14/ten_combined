import React from 'react'
import VideoMain from './VideoComponents/VideoMain'
import Nation from './NationComponents/Nation'
import QuizApp from './QuizApp/QuizApp'
import { Route, Routes } from 'react-router-dom'
import NoPageFound from './NoPageFound'
import NavBar from './NavBar'
function App() {
  return (
 <>
 <NavBar/>
 <Routes>
<Route path='/' element={<QuizApp/>}/>
<Route path='/nation' element={<Nation/>}/>
<Route path='/video' element={<VideoMain/>}/>
<Route path='*' element={<NoPageFound/>}/>
 </Routes>


 </>
     )
}

export default App