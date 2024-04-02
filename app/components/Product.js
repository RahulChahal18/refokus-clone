import React from 'react'
import Button from './Button'

function Product({elem,mover,index, onMouseEnter, onMouseLeave}) {
  return (
    <div className='w-full h-[23rem] py-20'>
        <div onMouseEnter={()=>mover(index)} className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-6xl capitalize font-med'>{elem.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-10'>{elem.description}</p>
                
                <div className='flex gap-5'>
                    {elem.live && <Button />}
                    {elem.case && <Button title='Case Study' />}
                    {/* <img src="" alt="" /> */}
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Product
