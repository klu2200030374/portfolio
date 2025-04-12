"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  texts: string[]
  typingSpeed?: number
  erasingSpeed?: number
  delayBetweenTexts?: number
}

const TypewriterText = ({
  texts,
  typingSpeed = 100,
  erasingSpeed = 50,
  delayBetweenTexts = 1500,
}: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (texts.length === 0) return

    let timeout: NodeJS.Timeout

    if (isTyping) {
      if (currentText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(texts[currentTextIndex].substring(0, currentText.length + 1))
        }, typingSpeed)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, delayBetweenTexts)
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        }, erasingSpeed)
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isTyping, texts, typingSpeed, erasingSpeed, delayBetweenTexts])

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}

export default TypewriterText
