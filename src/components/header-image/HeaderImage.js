import React from 'react'
import image from '../../assets/bk assets/strawberry-choco.mp4'
import { motion, useAnimation } from 'framer-motion'

const HeaderImage = () => {
  const controls = useAnimation()

  React.useEffect(() => {
    const pulseAnimation = async () => {
      await controls.start({
        scale: [1, 0.9, 1], // Pulsating effect, scaling up and down
        opacity: [1, 0.6, 1], // Fading effect
        // boxShadow: [
        //   '0px 0px 10px rgba(255,255,255,0.5)',
        //   '0px 0px 20px rgba(255,255,255,0.8)',
        //   '0px 0px 30px rgba(255,255,255,1)',
        // ],
        rotate: [0, -5, 5], // Gentle rotation
        transition: { duration: 3, ease: 'easeInOut' }, // Animation duration

      })
    }
    pulseAnimation()
  }, [controls])

  return (
    <motion.video
    playsInline
    muted
    loop 
    autoPlay
      src={image}
      initial={{
        scale: 1,
        opacity: 1,
        rotate: 0,
        clipPath: 'ellipse(100% 100% at 50% 50%)',
      }}
      animate={controls}
      style={{
        height: '100vh',
        width: '100vw',
        objectFit: 'cover',
        zIndex: 999,
        borderRadius: "2rem",
      }}
    />
  )
}

export default HeaderImage
