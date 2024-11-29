import React from 'react'
import Button from './Button'

const ImageClipBox = ({ src, clipClass}) => (
    <div className={clipClass}>
        <img 
            src={src}
        />
    </div>
)

const Contact = () => {
  return (
    <div id='contact' className='w-screen px-10 my-20 min-h-96'>
        <div className='relative py-24 bg-black rounded-lg text-blue-50 sm:overflow-hidden'>
            <div className='absolute top-0 hidden h-full overflow-hidden -left-20 w-72 sm:block lg:left-20 lg:w-96'>
                <ImageClipBox 
                    src='img/contact-1.webp'
                    clipClass='contact-clip-path-1'
                />
                
                <ImageClipBox 
                    src='img/contact-2.webp'
                    clipClass='contact-clip-path-2 lg:translate-y-40 translate-y-60'
                />
            </div>
            <div className='absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'>
            <ImageClipBox 
                src='img/swordman-partial.webp'
                clipClass='absolute md:scale-125'
            />
            
            <ImageClipBox 
                src='img/swordman.webp'
                clipClass='sword-man-clip-path md:scale-125'
            />
            </div>
            
            <div className='flex flex-col items-center text-center'>
                <p className='font-general text-[10px] uppercase'>Step into biosphere</p>
                <p className='w-full mt-10 text-5xl special-font font-zentry leading-[0.9] md:text-[6rem]'>Join <b>u</b>s in Creating <br /> the new era of<br /> G<b>a</b>ming t<b>o</b>gether</p>

                <Button title='contact us' containerClass='mt-10 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Contact