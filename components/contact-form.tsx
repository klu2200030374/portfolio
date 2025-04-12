"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // This would typically be a server action or API endpoint
      // For now, we'll simulate sending an email
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-400">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-400">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-gray-400">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-400">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
        ></textarea>
      </div>
      <Button
        type="submit"
        className="w-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-emerald-600 hover:bg-emerald-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
