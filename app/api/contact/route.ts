import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate the data
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real implementation, you would send an email here
    // For example, using a service like SendGrid, Mailgun, etc.
    // The email would be sent to 2200030374cseh@gmail.com

    // For now, we'll just log the data and return a success response
    console.log("Contact form submission:", { name, email, subject, message })

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
