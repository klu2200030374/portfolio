"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
}

const AnimatedSection = ({ children, delay = 0.3 }: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once it's visible, no need to observe anymore
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [])

  return (
    <div ref={ref}>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: delay,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default AnimatedSection
