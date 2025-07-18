import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye, Target, TrendingUp, Globe } from "lucide-react"

export default function VisionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h1>
            <p className="text-xl text-blue-100">Creating a safer digital world for businesses of all sizes with AI-powered cybersecurity.</p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px]">
              <Image src="/vision.jpg" alt="StarInfoSec Vision" fill className="object-cover rounded-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision Statement</h2>
              <p className="text-lg text-gray-700 mb-4">
                At StarInfoSec, we envision a world where all businesses can operate confidently, without fear of cyber threats. We lead in cybersecurity innovation, offering accessible solutions that empower small businesses. Our goal is to make strong security a standard for every business, not just large enterprises.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                
              </p>
              <p className="text-lg text-gray-700">
                
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Strategic Pillars</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The key focus areas that guide our vision and long-term strategy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Democratizing Cybersecurity</h3>
              <p className="text-gray-600 mb-4">
                We believe cybersecurity should be accessible to all businesses. Our goal is to deliver affordable, scalable solutions with top-level protection. By sharing cybersecurity expertise, we help small businesses compete safely in the digital world.



              </p>
              <p className="text-gray-600">
               
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proactive Security Culture</h3>
              <p className="text-gray-600 mb-4">
                We see cybersecurity as a key part of business culture, not just a technical issue. Through training and consulting, we promote a proactive security mindset at all levels. By building security awareness into the core of organizations, we help them stay resilient against evolving threats.
              </p>
              <p className="text-gray-600">
                
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Innovation</h3>
              <p className="text-gray-600 mb-4">
                Cybersecurity is always changing, with new threats emerging daily. We stay at the forefront of research and technology, constantly improving our methods to tackle the latest risks. By investing in innovation, we protect our clients against both current and future threats.
              </p>
              <p className="text-gray-600">
                
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
              <p className="text-gray-600 mb-4">
               While we serve small businesses and startups, our vision is global. Through research, open-source tools, and knowledge sharing, we aim to strengthen the wider security community and help create a safer digital world for all.
              </p>
              <p className="text-gray-600">
                
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking to the Future</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our long-term goals and aspirations for StarInfoSec and the cybersecurity industry.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold mb-4">By 2025</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                    <p className="text-gray-700">
                      Expand our automated security assessment tools to make preliminary vulnerability scanning
                      accessible to even the smallest businesses.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-semibold">2</span>
                    </div>
                    <p className="text-gray-700">
                      Develop comprehensive security training programs tailored specifically for non-technical employees
                      in small business environments.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                    <p className="text-gray-700">
                      Establish partnerships with small business associations to promote cybersecurity awareness and
                      best practices.
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">By 2030</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-semibold">1</span>
                    </div>
                    <p className="text-gray-700">
                      Create an AI-driven security platform that provides real-time threat detection and response
                      capabilities for small businesses.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-semibold">2</span>
                    </div>
                    <p className="text-gray-700">
                      Establish a global network of security professionals dedicated to supporting small businesses in
                      underserved markets.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-semibold">3</span>
                    </div>
                    <p className="text-gray-700">
                      Contribute to the development of simplified security standards and frameworks specifically
                      designed for small business implementation.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us in Our Vision</h2>
            <p className="text-xl text-blue-100 mb-8">
              Partner with StarInfoSec to help create a more secure digital future for your business and beyond.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-100">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
