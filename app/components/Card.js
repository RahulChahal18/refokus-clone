import { motion } from 'framer-motion';
import React from 'react'
import { CgArrowLongRight } from "react-icons/cg";
function Card({wid,start,para,hov="false"}) {
    
  return (
    <motion.div whileHover={{backgroundColor: hov==="true" && "#7443ff", padding:"25px"}} className={` ${wid} bg-zinc-800 p-5 rounded-xl min-h-[30rem] flex flex-col justify-between `}>
        <div className='w-full'>
            <div className='w-full flex justify-between items-center'>
            <h3>One Heading</h3>
            <CgArrowLongRight />
            </div>
            <h1 className='text-3xl font-medium mt-5'>Who we are</h1>
        </div>
        <div className='down w-full'>
            {
                start && <><h1 className='text-6xl font-semibold tracking-tight leading-none'>start a project</h1>
                <button className='rounded-full mt-5 px-5 py-2 border-[1px] border-zinc-50'>Contact Us</button></>
            }
            {
                para && <p className='text-sm text-zinc-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            }
        </div>

    </motion.div>
  )
}

export default Card
