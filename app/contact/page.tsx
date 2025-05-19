import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">Get in touch with our team to discuss your cybersecurity needs.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone & Whatsapp</h3>
                <p className="text-gray-600">+91 8669361239</p>
                <p className="text-gray-600"></p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">starinfosec0@gmail.com</p>
                <p className="text-gray-600"></p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Office</h3>
                <p className="text-gray-600">Urun-Islampur</p>
                <p className="text-gray-600"></p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-4">
                Have questions about our services or want to schedule a consultation? Fill out the form below and one of
                our security experts will get back to you within 24 hours.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Request a Quote</h3>
                    <p className="text-gray-600">Get a customized quote for your specific security needs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Schedule a Consultation</h3>
                    <p className="text-gray-600">Book a call with one of our security experts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">General Inquiries</h3>
                    <p className="text-gray-600">Ask questions about our services or company.</p>
                  </div>
                </div>
              </div>

              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image src="/contact.jpg" alt="Contact StarInfoSec" fill className="object-cover" />
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section 
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're located in the heart of Cyber City. Feel free to stop by during business hours.
            </p>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/map.png" alt="Office Location Map" fill className="object-cover" />
          </div>
        </div>
      </section> */}

      {/* FAQ Section 
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">How quickly can you start a penetration test?</h3>
                <p className="text-gray-700">
                  Depending on our current workload, we can typically begin a penetration test within 1-2 weeks of
                  finalizing the engagement details. For urgent situations, we offer expedited services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Do you offer ongoing security monitoring?</h3>
                <p className="text-gray-700">
                  Yes, we provide continuous security monitoring services as part of our comprehensive security
                  packages. This includes regular vulnerability scanning, threat intelligence updates, and security
                  alerts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">How do you handle sensitive data during testing?</h3>
                <p className="text-gray-700">
                  We take data privacy and confidentiality extremely seriously. All testing is conducted according to
                  strict security protocols, and we sign comprehensive NDAs before beginning any engagement. We never
                  extract or store sensitive data from client systems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">What makes your services suitable for small businesses?</h3>
                <p className="text-gray-700">
                  Our services are specifically designed with small businesses in mind. We offer flexible, scalable
                  solutions that provide enterprise-grade security at affordable prices, with clear communication and
                  practical recommendations that don't require a large security team to implement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
    </>
  )
}
