import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-10 flex gap-32'>
            <div className='basis-1/2'>
                <h1 className='text-[11.5rem] font-semibold leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-4'>
                <div className='bais-1/3'>
                    <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                    {
                    ["instagram","twitter (x?)","LinkedIn"].map((item,index)=> <a key={index} className='block mt-3 capitalize text-zinc-600'>{item}</a> )
                    }
                </div>
                <div className='bais-1/3'>
                    <h4 className='mb-10 text-zinc-500 capitalize'>sitemap</h4>
                    {
                    ["Home","Work","Careers","Contact"].map((item,index)=> <a key={index} className='block mt-3 capitalize text-zinc-300'>{item}</a> )
                    }
                </div>
                <div className='basis-1/2 flex flex-col items-end'>
                    <p className='text-right font-medium'>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
                    <img className='w-32 mt-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqiSFKKNbkX5nXPzrKs5Sw85zEZeF9vZS6l-SACMs54D3EAHJ9HyepND6M-GoYBEYqVA&usqp=CAU" alt="" />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
