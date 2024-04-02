import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

const Work = () => {
    var images = [
        {url:"https://images.unsplash.com/photo-1490133961212-53d0e60a1f73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw1MDAzOTI3N3x8ZW58MHx8fHx8", top:"50%" , left:"50%" , isActive: false},
        {url:"https://images.unsplash.com/photo-1482342285164-d688b5d03965?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw1MDAzOTI3N3x8ZW58MHx8fHx8", top:"56%" , left:"44%" , isActive: false},
        {url:"https://images.unsplash.com/photo-1458724715045-81841536951e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3w1MDAzOTI3N3x8ZW58MHx8fHx8", top:"45%" , left:"56%" , isActive: false},
        {url:"https://images.unsplash.com/photo-1498252851347-021b48597b97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8NTAwMzkyNzd8fGVufDB8fHx8fA%3D%3D", top:"60%" , left:"53%" , isActive: false},
        {url:"https://images.unsplash.com/photo-1643252494989-81cd0b5bead2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8NTAwMzkyNzd8fGVufDB8fHx8fA%3D%3D", top:"43%" , left:"40%" , isActive: false},
        {url:"https://images.unsplash.com/photo-1476988489203-c666163148b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8NTAwMzkyNzd8fGVufDB8fHx8fA%3D%3D", top:"65%" , left:"55%" , isActive: false}
    ]
    let [data,setData] = useState(images);



    const{scrollYProgress} =  useScroll();

    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //   showHideImages(Math.floor(latest*100));
    // })

    // function showHideImages(scrollVal){
    //   switch(scrollVal){
    //     case 1:

    //     case 2:

    //     case 3:

    //   }
    // }

    scrollYProgress.on("change", (curY)=>{
      function imagesShow(arr){
        setData(curr=>
          curr.map((item,index)=>
            arr.indexOf(index) === -1 
            ? {...item,isActive:false} 
            : {...item, isActive:true}
          )
        ); 
      }
      switch(Math.floor(curY*100)){
        case 0:
          imagesShow([]);
          break;
        case 1:
          imagesShow([0]);
          break;
        case 2:
          imagesShow([0,1]);
          break;
        case 3:
          imagesShow([0,1,2]);
          break;
        case 4:
          imagesShow([0,1,2,3]);
          break;
        case 6:
          imagesShow([0,1,2,3,4]);
          break;
        case 8:
          imagesShow([0,1,2,3,4,5]);
          break;
        default:
          imagesShow([]);
      }
    })



  return (
    <div className='w-full mt-10'>
      <div className='max-w-screen-xl mx-auto relative'>
        <h1 className='text-[30vw] leading-none text-center font-medium select-none tracking-tight'>work</h1>
        <div className='absolute top-0 w-full h-full'>
            {data.map((elem,index)=>(elem.isActive && <img key={index} className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]' style={{top:elem.top,left:elem.left}} src={elem.url} alt="" />))}
        </div>
      

      </div>

    </div>
  )
}

export default Work
