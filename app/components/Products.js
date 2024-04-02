"use client"
import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';


export default function Products() {
    var products = [
        {title: "arqitel", description:"Arqu Executive and its employees continue to receive orders from customers and customers that get orders from customers to get", live:true, case:false},
        {title: "TTR", description:"Arqu Executive and its employees continue to receive orders from customers and customers that get orders from customers to get", live:true, case:false},
        {title: "YIR2022", description:"Arqu Executive and its employees continue to receive orders from customers and customers that get orders from customers to get", live:true, case:true},
        {title: "Yahoo", description:"Arqu Executive and its employees continue to receive orders from customers and customers that get orders from customers to get", live:true, case:true},
        {title: "Rainfall", description:"Arqu Executive and its employees continue to receive orders from customers and customers that get orders from customers to get", live:true, case:true},
        {title: "Silvr", description: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.", live:true, case:true}
    ];

     // Array of video URLs
    // const videoUrls = [
    //   {url: 'public/video1_Arqitel.mp4'},
    //   {url: 'public/video2_Cula_promo.mp4'},
    //   {url: 'public/video3_Maniv.mp4'},
    //   {url: 'public/video4_people.mp4'},
    //   {url: 'public/video1_Arqitel.mp4'},
    //   {url: 'public/video5_Silvr.mp4'},
    //   {url: 'public/video6_webflow-education-promo.mp4'}
    // ];
    const videoUrls = [
      'https://youtu.be/Gy8Xltuuh0E?si=q_IBa_sKniCR742C',
      'https://youtu.be/1KAggd44iEY?si=qO3eJG8xvbRcB2tY',
      'https://youtu.be/3-iCDOYkfms?si=hD2hRbGLqnRQwgCe',
      'https://youtu.be/d1VN6h8m498?si=do-eUF4g_QbwjK3u',
      'https://youtu.be/CNrPV6l5RyE?si=k9GEtSv3ISbCcYVp',
      'https://youtu.be/xlKFto5QwVY?si=WnzzCl9IaEDfgunf'
    ];
    

    const [pos,setPos] = useState(0);
    const [currentVideo, setCurrentVideo] = useState(null);

    // Function to handle mouse enter event for a product
    const handleMouseEnter = (index) => {
      setCurrentVideo(index);
    };
    // Function to handle mouse leave event for a product
    const handleMouseLeave = () => {
      setCurrentVideo(null);
    };

    const mover = (val)=>{
      setPos(val*23);
    }

  return (
    <div className='mt-32 relative'>

        {products.map((elem,index)=>
          <Product mover={mover} index={index} key={index} elem={elem} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)} />
        )} 

        <div className='w-full h-full absolute top-0 pointer-events-none'>
          <motion.div initial={{y:pos, x:"-50%"}} animate={{y:pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration: 0.6}}
            className='window absolute w-[32rem] h-[23rem] left-[44%] overflow-hidden'>

            {products.map((elem, index) => (
              <motion.div key={index} animate={{ y: -pos + `rem` }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                className='w-full h-full overflow-hidden rounded-lg'>         
                  {/* <video controls muted autoPlay className={`h-full w-full ${ currentVideo === index ? 'active' : ''}`} >
                        Your browser does not support the video tag.
                  </video> */}
                  {/* <iframe src={videoUrls[index]} frameborder="0"></iframe> */}
                  <ReactPlayer
                    height="100%"
                    width="100%"
                    url='https://youtu.be/Gy8Xltuuh0E?si=q_IBa_sKniCR742C'
                    loop={true}
                    autoPlay={true}
                    controls={false}
                    // light is usefull incase of dark mode
                    
                    // picture in picture
                    // pip={true}
                  /> 
                  <source src='https://youtu.be/Gy8Xltuuh0E?si=q_IBa_sKniCR742C' type="video/mp4" />
              </motion.div>
            ))}

            
              
             

            {/* <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration: 0.5}} className='w-full h-full overflow-hidden rounded-lg'>
              <video className='absolute w-full h-full hidden' controls autoPlay muted src={videoUrls[0]}></video>
            </motion.div>
            <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration: 0.5}} className='w-full h-full bg-sky-200'>
              <video className='absolute w-full h-full hidden' controls autoPlay muted src={videoUrls[1]}></video>
            </motion.div>
            <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration: 0.5}} className='w-full h-full bg-sky-300'>
              <video className='absolute w-full h-full hidden' controls autoPlay muted src={videoUrls[2]}></video>
            </motion.div>
            <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration: 0.5}} className='w-full h-full bg-sky-400'>
              <video className='absolute w-full h-full hidden' controls autoPlay muted src={videoUrls[3]}></video>
            </motion.div>
            <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration: 0.5}} className='w-full h-full bg-sky-500'>
              <video className='absolute w-full h-full hidden' controls autoPlay muted src={videoUrls[4]}></video>
            </motion.div>
            <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration: 0.5}} className='w-full h-full bg-sky-600'>
              <video className='absolute w-full h-full hidden' controls autoPlay muted src={videoUrls[5]}></video>
            </motion.div> */}

          </motion.div>
        </div>
    </div>
  )
}
