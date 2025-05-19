import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Users, Award, Briefcase } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About StarInfoSec</h1>
            <p className="text-xl text-blue-100">
              We're a team of cybersecurity experts dedicated to protecting small businesses and startups from digital
              threats.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2025, StarInfoSec was born out of a passion for cybersecurity and a recognition that small
                businesses and startups were underserved in the security market.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our founders, with over 6 years of combined experience in cybersecurity, set out to create a company
                that would provide enterprise-grade security services at prices accessible to growing businesses.
              </p>
              <p className="text-lg text-gray-700">
                Today, we're proud to have helped  15 businesses strengthen their security posture and protect
                their valuable digital assets from increasingly sophisticated cyber threats.
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image src="/about.jpg" alt="StarInfoSec Team" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at StarInfoSec.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with the highest ethical standards and transparency in all our engagements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our work, from testing to reporting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our clients, treating their security challenges as our own.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve our methodologies to stay ahead of emerging threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the cybersecurity professionals who make StarInfoSec exceptional.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 w-full">
                <Image src="/yash.jpg" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Yash Kumbhar</h3>
                <p className="text-primary mb-3">Founder & CEO</p>
                <p className="text-gray-600">
                   Yash leads our team with expertise in penetration testing and
                  security strategy.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 w-full">
                <Image src="/atmaj.jpg" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Atmaj Khatavkar</h3>
                <p className="text-primary mb-3">Lead Security Consultant</p>
                <p className="text-gray-600">
                  With 6 years in cybersecurity, Atmaj specializes in web application security and has led numerous high-profile penetration tests.
                </p>
              </div>
            </div>

           {/* <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 w-full">
                <Image src="/team-3.png" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">David Chen</h3>
                <p className="text-primary mb-3">Security Training Director</p>
                <p className="text-gray-600">
                  David leads our training programs, helping organizations build a culture of security awareness.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section> 

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Contact our team today to discuss how we can help secure your business against cyber threats.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
