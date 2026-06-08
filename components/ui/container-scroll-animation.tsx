'use client'
import React, { useRef } from 'react'
import {
  useScroll,
  useTransform,
  useSpring,
  motion,
  MotionValue,
} from 'framer-motion'

const springConfig = { stiffness: 400, damping: 80, mass: 0.3 }

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode
  children: React.ReactNode
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.05, 1])

  // Animation completes in the first 45% of the in-view scroll progress,
  // not the full 100% — feels snappier and avoids dragging through the
  // rest of the page.
  const rotate = useTransform(scrollYProgress, [0, 0.45], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 0.45], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 0.45], [0, -100])

  // Spring physics wrapping every motion value for smooth 60/120fps animation
  const rotateSpring = useSpring(rotate, springConfig)
  const scaleSpring = useSpring(scale, springConfig)
  const translateSpring = useSpring(translate, springConfig)

  return (
    <div
      className="md:h-[62rem] flex items-center justify-center relative p-0 md:p-10"
      ref={containerRef}
    >
      <div
        className="py-0 md:py-16 w-full relative"
        style={{ perspective: '1000px' }}
      >
        <Header
          translate={translateSpring}
          titleComponent={titleComponent}
          isMobile={isMobile}
        />
        <Card
          rotate={rotateSpring}
          translate={translateSpring}
          scale={scaleSpring}
          isMobile={isMobile}
        >
          {children}
        </Card>
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Header = ({ translate, titleComponent, isMobile }: any) => (
  <motion.div
    style={{
      translateY: isMobile ? 0 : translate,
      willChange: 'transform',
    }}
    className="max-w-5xl mx-auto text-center mb-0 md:mb-12"
  >
    {titleComponent}
  </motion.div>
)

export const Card = ({
  rotate,
  scale,
  isMobile,
  children,
}: {
  rotate: MotionValue<number>
  scale: MotionValue<number>
  translate: MotionValue<number>
  isMobile: boolean
  children: React.ReactNode
}) => (
  <motion.div
    style={{
      rotateX: isMobile ? 0 : rotate,
      scale: isMobile ? 1 : scale,
      willChange: 'transform',
      boxShadow: isMobile
        ? 'none'
        : '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
    }}
    className="w-full md:max-w-5xl mx-auto h-auto md:h-[40rem] border-0 md:border-4 md:border-[#2a2a2a] p-0 md:p-0 bg-transparent md:bg-[#141414] rounded-[12px] md:rounded-[24px] overflow-hidden"
  >
    <div className="h-full w-full overflow-hidden">{children}</div>
  </motion.div>
)
