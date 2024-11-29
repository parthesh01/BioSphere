import React, { useRef, useState } from 'react'
import {  TiLocationArrow } from 'react-icons/ti'


const BentoTilt = ({ children, className =''}) => {

    const [transformStyle, setTransformStyle] = useState('')

    const itemRef = useRef()

    const handleMouseMove = (e) => {
        if(!itemRef.current) return

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 10
        const tiltY = (relativeX - 0.5) * -10

        const newTransform =`perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`
        

        setTransformStyle(newTransform)
    }

    const handleMouseLeave = (e) => {
        setTransformStyle('')
    }

    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle}}> 
            {children}
        </div>
    )
}


const BentoCard = ({ src, title, description}) => {
    return (
        <div className='relative size-full'>
            <video 
                src={src}
                loop
                muted
                autoPlay
                className='absolute top-0 left-0 object-cover object-center size-full' 
            />
            <div className='relative z-10 flex flex-col justify-between p-5 size-full text-blue-50'>
                <div>
                    <h1 className='bento-title special-font'>{title}</h1>
                    {description && (
                        <p className='mt-3 text-xs max-w-64 md:text-base'>{description}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

const Features = () => {
  return (
    <section className='bg-black pb-52'>
        <div className='container px-3 mx-auto md:px-10'>
            <div className='px-5 py-32'>
                <p className='text-lg font-circular-web text-blue-50'>Immerse Yourself in the BioSphere</p>
            <p className='max-w-md text-lg opacity-50 font-circular-web text-blue-50'>
            A Boundless Universe Where Every Game, Every Player, and Every World Comes Together in an Endless Journey of Exploration and Play
            </p>
            </div>

        <BentoTilt className='relative w-full overflow-hidden rounded-md border-hsla mb-7 h-96 md:h-[65vh]'>
            <BentoCard 
            src='videos/feature-1.mp4' 
            title={<>Metaco<b>nn</b>ect</>} 
            description='Seamlessly link your gaming accounts, achievements, and identities across platforms into one unified profile.
            MetaConnect ensures your progress and legacy stay with you, no matter where or how you play'
            
            />
            </BentoTilt>
            <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 w-full'>
                <BentoTilt className='row-span-1 bento-tilt_1 md:col-span-1 md:row-span-2'>
                    <BentoCard 
                        src='videos/feature-2.mp4'
                        title={<>Sphere<b>M</b>arket</>}
                        description='A cross-platform economy where gamers can trade, buy, or sell in-game assets—bridging the gap between digital and physical gaming worlds'
                    />
                </BentoTilt>
                
                <BentoTilt className='row-span-1 bento-tilt_1 ms-32 md:col-span-1 md:ms-0'>
                    <BentoCard 
                        src='videos/feature-3.mp4'
                        title={<>N<b>e</b>xus</>}
                        description='The Nexus is the social hub of BioSphere—a place to meet new players, join teams, and engage in cross-game challenges'
                    />
                </BentoTilt>
                
                <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
                    <BentoCard 
                        src='videos/feature-4.mp4'
                        title={<>Are<b>n</b>a</>}
                        description='Test your skills in BioSphere Arena, a competitive hub where players from different games face off in unique, cross-game tournaments'
                    />
                </BentoTilt>
                <BentoTilt className='bento-tilt_2'>
                    <div className='flex flex-col justify-between p-5 size-full bg-violet-300'>
                        <h1 className='text-black bento-title special-font max-w-64'>M<b>o</b>re co<b>m</b>ing s<b>o</b>on!</h1>

                        <TiLocationArrow className='m-5 scale-[5] self-end'/>
                    </div>
                </BentoTilt>
            <BentoTilt className='bento-tilt_2'>
                <video
                    src='/videos/feature-5.mp4'
                    loop
                    muted
                    autoPlay
                    className='object-cover object-center size-full'
                />
            </BentoTilt>
            </div>
        </div>
    </section>
  )
}

export default Features