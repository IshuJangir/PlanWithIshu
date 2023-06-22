import React, { useState } from 'react'
import data from './data';
import Tours from './components/Tours'

export default function App() {

const [tours, setTours]=useState(data);


function removeTour(id) {
  const newTours = tours.filter(tour => tour.id !== id);
  setTours(newTours);
}

function resethandler(){
  setTours(data)
}

if(tours.length===0){
  return(
    <div className='flex justify-center items-center h-[100vh] flex-col gap-4 '>
      <p>No Tours Left</p>
      <button onClick={resethandler} className='bg-yellow-400 px-5 py-2 text-white rounded'>Refresh</button>
    </div>
  )
}



  return (
    <div className='flex justify-center items-center p-3 flex-col'>
      <h1 className='text-3xl p-4 border border-black rounded' >Plan With Ishu</h1>
      <Tours tours={tours} removeTour={removeTour} ></Tours>
    </div>
  )
}


