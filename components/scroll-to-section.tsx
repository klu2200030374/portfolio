"use client"

import { useEffect } from "react"

export default function ScrollToSection() {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.substring(1)
        const element = document.getElementById(id || "")

        if (element) {
          // Add offset for the sticky header
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    }

    // Add event listener to document
    document.addEventListener("click", handleAnchorClick)

    // Check if URL has a hash on page load
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1)
        const element = document.getElementById(id)

        if (element) {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    }

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}
