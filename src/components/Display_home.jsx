import React from 'react'
import Element_nav from './Element_nav'
import { albumsData, songsData } from '../assets/assets'
import Album_cards from './Album_cards'
import Song_card from './Song_card'
const Display_home = () => {
  return (
    <>
    <Element_nav/>
   <div className='p-6 bg-gradient-to-b from-[#3b1d5a] via-[#1a1224] to-[#121212]'>
    <div className='mb-4 '>
        <h1 className='my-5 font-bold text-2xl'>Album Trends</h1>
        <div className='flex overflow-auto'>
           {albumsData.map((item, index) => (<Album_cards key={index}  name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
   </div>

</div>       
  <div className='mb-4 '>
        <h1 className='my-5 font-bold text-2xl'>Song Trends</h1>
        <div className='flex overflow-auto'>
{songsData.map((item, index) => (<Song_card key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
    </div>
    </div>
     </>
  )
}

export default Display_home