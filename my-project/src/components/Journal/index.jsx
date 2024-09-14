import React from 'react'
import Img1 from "../../assets/5.jpg"
import Img2 from "../../assets/6.jpg"
import { delay, motion } from 'framer-motion';
import { SlideUp } from '../../utility/animation'


const Journaldata = [
    {
        id:1,
        title: "An Unforgattable", 
        about:"If you only have one day to visit yosemtie National Park and you want to make the out of it.",
        date: "May 30, 2022",
        url:"#",
        image: Img1,
        delay:0.2,
    },
    {
        id:2,
        title: "Symphonies in Steel", 
        about:"If you only have one day to visit yosemtie National Park and you want to make the out of it.",
        date: "April 30, 2021",
        url:"#",
        image: Img2,
        delay:0.4,
    }
]

const Journal = () => {
  return (
    <div>
        <section className='container mt-40' id='journal'>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2, delay:0.2}} className='text-center md:max-w-[650px] mx-auto space-y-4'>
                <p>The Journal</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quidem sed corrupti, enim unde inventore nostrum quam, ipsam et obcaecati pariatur. Veritatis voluptatibus quos ullam praesentium magnam doloribus consequuntur dolorum!
                </p>
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center mt-20'>
                {Journaldata.map((data)=>(
                    <motion.div variants={SlideUp(data.delay)} initial="hidden" whileInView="visible" key={data.id}>
                        <div className='overflow-hidden'>
                            <img className='w-full h-[350px] object-cover' src={data.image} alt="" />
                        </div>
                        <div className='space-y-1 py-6 text-center px-12'>
                            <p className='uppercase'>{data.date}</p>
                            <p className='text-xl font-semibold font-merriweather'>{data.title}</p>
                            <p className='!mt-8'>{data.about}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <button className='block mx-auto mt-6 text-brandBlue uppercase font-bold'>All posts</button>
        </section>
    </div>
  )
}

export default Journal