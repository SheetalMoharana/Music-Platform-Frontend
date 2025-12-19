import React, { useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Display_home from './Display_home'
import Album_display from './Album_display'
import { albumsData } from '../assets/assets'

const Music_display = () => {

  return (
    <div className='w-full rounded bg-[#121212] text-white overflow-auto'>
        <Routes>
            <Route path='/' element={<Display_home/>}/>
             <Route path='/album/:id' element={<Album_display/>}/>
        </Routes>
    </div>
  )
}

export default Music_display