import React, { useState } from 'react'

export default function Card({id,image,name,info,price,removeTour}) {

    let description = info.substring(0,200);

    const [readmore, setReadmore]= useState(false)


  return (
    <div className='w-1/3 h-max border shadow-lg p-10 flex flex-col items-start rounded'>
      <img className='w-[400px] h-[200px]' src={image} alt="image" />
      <h4 className='text-[#1faa59] text-[1.3rem]' >₹{price}</h4>
      <h4 className='text-2xl'>{name}</h4>
      <div>{info} </div>
      <button onClick={()=>removeTour(id)} className='border-none px-5 py-2 mt-3 bg-yellow-300 text-white rounded' >Not Interest</button>
    </div>
  )
}
