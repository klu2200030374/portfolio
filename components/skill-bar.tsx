"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

interface SkillBarProps {
  skill: string
  percentage: number
  color?: "blue" | "green" | "orange" | "purple" | "red"
}

const SkillBar = ({ skill, percentage, color = "blue" }: SkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const colorVariants = {
    blue: "from-blue-600 to-blue-400",
    green: "from-green-600 to-green-400",
    orange: "from-orange-600 to-orange-400",
    purple: "from-purple-600 to-purple-400",
    red: "from-red-600 to-red-400",
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) observer.unobserve(ref.current)
        }
      },
      {
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
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span className="text-sm text-gray-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${colorVariants[color]}`}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export default SkillBar
