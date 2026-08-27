import React from 'react'
import { societyData } from '@/db/seed'
import Card from './Card'

const Section = () => {
  return (
    <div className='flex h-max w-screen justify-center items-center'>

    <div className='grid lg:grid-cols-2 mx-10 lg:mx-0 grid-cols-1 xl:grid-cols-4 gap-4 mt-8  xl:max-w-5xl lg:max-w-3xl'>
        {societyData.map((_ : any, i : any) => (
          <div key={i}>
            <Card id={i} name={societyData[i].name} description={societyData[i].description} category={societyData[i].category} />
            </div>
        ))}

    </div>
    </div>
  )
}

export default Section