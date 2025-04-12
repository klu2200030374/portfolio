"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (href.startsWith("#")) {
        const section = document.querySelector(href)
        if (section) {
          const rect = section.getBoundingClientRect()
          const isInView = rect.top <= 100 && rect.bottom >= 100
          setIsActive(isInView)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [href])

  return (
    <Link
      href={href}
      className={`hover:text-emerald-500 transition-colors relative ${isActive ? "text-emerald-500" : ""}`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 transform scale-x-0 transition-transform duration-300 ${
          isActive ? "scale-x-100" : ""
        }`}
      ></span>
      {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-500 shadow-glow-emerald"></span>}
    </Link>
  )
}
