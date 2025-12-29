import React from 'react'
import { Link } from 'react-router-dom'

const Aesthetic_cards = ({ id, image, name, desc }) => {
  return (
    <Link to={`/aesthetic/${id}`} className='min-w-[180px] p-4 mr-4 rounded-lg bg-[#181818] hover:bg-[#252525] transition' >
      <img src={image} className='rounded-lg mb-3' />
      <h3 className='font-semibold'>{name}</h3>
      <p className='text-sm text-gray-400'>{desc}</p>
    </Link>
  )
}

export default Aesthetic_cards