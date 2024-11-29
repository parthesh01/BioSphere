import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import {  ScrollTrigger  } from 'gsap/all'
import AnimatedTitle from './AnimatedTitle'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacer: true,                
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })
    
    
  return (
    <div id='about' className='w-screen min-h-screen'>
        <div className='relative flex flex-col items-center gap-5 mb-8 mt-36'>
           <h2 className='text-sm uppercase font-general md:text-[20px]'>Welcome to BioSphere</h2> 

           <AnimatedTitle title="Disc<b>o</b>ver the universe <br /> beyond the g<b>a</b>me!" containerClass="mt-5 !text-black text-center" />

           <div className='about-subtext'>
                <p>Your Journey, Your Legacy-Reimagined as a Legendary Quest!</p>
                <p>BioSphere unites every player from countless games and platforms, both digital and physical, into a unified Ecosystem</p>
           </div>
        </div> 
        
        <div className='w-screen h-dvh' id='clip'>
            <div className='mask-clip-path about-image'>
                <img 
                    src='img/about.webp'
                    alt='background'
                    className='absolute top-0 left-0 object-cover size-full'
                />
            </div>
            
        </div>
    </div>
  )
}

export default About