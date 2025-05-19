import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10">
                <Image
                  src="/logo.png?height=40&width=40"
                  alt="StarInfoSec Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <span className="text-xl font-bold">StarInfoSec</span>
            </Link>
            <p className="text-sm text-blue-100 max-w-xs">
              Professional penetration testing and cybersecurity services for small businesses and startups.
            </p>
            <div className="flex gap-4 mt-4">
            <Link href="https://www.instagram.com/starinfosec/?igsh=aG95ZDl1MXljNWN0" className="text-blue-100 hover:text-white">
            <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
                <Link href="https://www.linkedin.com/in/star-info-sec-b4159b362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-blue-100 hover:text-white">
                 <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
           </Link>
         </div>

          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <Link href="/services#webapp" className="hover:text-white">
                  Web App Penetration Testing
                </Link>
              </li>
              <li>
                <Link href="/services#training" className="hover:text-white">
                  Cybersecurity Training
                </Link>
              </li>
              <li>
                <Link href="/services#employee" className="hover:text-white">
                  Employee Training
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="hover:text-white">
                  Security Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 text-blue-100" />
                <span>Urun-Islampur</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0 text-blue-100" />
                <span>+91 8669361239 </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0 text-blue-100" />
                <span>starinfosec0@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-blue-800 text-center text-sm text-blue-100">
          <p>&copy; {new Date().getFullYear()} StarInfoSec. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
