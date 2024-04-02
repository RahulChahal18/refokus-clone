import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto py-20 flex gap-2'>
        <Card wid={"basis-1/3"} start={false} para={true} />
        <Card wid={"basis-2/3"} start={true} para={false} hov="true"/>
      </div>
    </div>
  )
}

export default Cards
