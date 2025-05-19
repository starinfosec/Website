"use server"

import fs from "fs"
import path from "path"

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const company = formData.get("company") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Create contact submission data
    const submission = {
      name,
      email,
      phone: phone || "Not provided",
      company: company || "Not provided",
      subject,
      message,
      date: new Date().toISOString(),
    }

    // Create submissions directory if it doesn't exist
    const submissionsDir = path.join(process.cwd(), "submissions")
    if (!fs.existsSync(submissionsDir)) {
      fs.mkdirSync(submissionsDir, { recursive: true })
    }

    // Generate a unique filename
    const filename = `${Date.now()}-${email.replace(/[^a-zA-Z0-9]/g, "-")}.json`
    const filePath = path.join(submissionsDir, filename)

    // Write submission to file
    fs.writeFileSync(filePath, JSON.stringify(submission, null, 2))

    // Return success response
    return {
      success: true,
      message: "Contact form submitted successfully!",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "An error occurred while submitting the form.",
    }
  }
}
