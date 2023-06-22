import React from 'react'
import data from '../data'
import Card from './Card'

export default function Tours({tours,removeTour}) {
  return (
    <div className='flex justify-center flex-wrap max-w-[1300px] m-[1rem] p-[1rem] gap-3'>
      {
        tours.map((tour) => {
            return <Card key={tour.id}  {...tour} removeTour={removeTour} ></Card>
      })
      }

      
    </div>
  )
}
