import React from 'react'
import { societyData } from '@/db/seed'
import Card from './Card'
import Link from 'next/link'

const Section = () => {
  return (
    <div className='flex h-max w-screen justify-center items-center'>

    <div className='grid lg:grid-cols-2 mx-10 lg:mx-0 grid-cols-1 xl:grid-cols-4 gap-4 mt-8  xl:max-w-5xl lg:max-w-3xl'>
        {societyData.map((society) => {
          const slug = society.name.toLowerCase().replace(/\s+/g, '-');
          return (
        (
          <div key={society.id}>
            <Link href={`/society/${slug}`}>
            <Card id={society.id} name={society.name} description={society.description} category={society.category} image={society.image} />
            </Link>
            </div>
        ))})}

</div>
        </div>
  )
}

export default Section