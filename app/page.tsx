import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, CheckCircle, Users, Code, Lock, Search, FileText, Award } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Secure Your Business with StarInfoSec
              </h1>
              <p className="text-lg md:text-xl text-blue-100">
                Identify vulnerabilities before hackers do. Our professional penetration testing services help small
                businesses and startups protect their digital assets.
              </p>
              <div className="flex flex-wrap gap-4">
  <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-100">
    <Link href="/contact">Get Started</Link>
  </Button>

  <Button asChild size="lg" className="bg-green-500 text-white hover:bg-green-600">
    <Link
      href="https://wa.me/918669361239" // Replace with your actual number
      target="_blank"
      rel="noopener noreferrer"
    >
      Chat on WhatsApp
    </Link>
  </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/head.jpg?height=400&width=600"
                alt="Cybersecurity Protection"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pentesting Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Penetration Testing Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our penetration testing services can strengthen your security posture and protect your
              business.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Identify Vulnerabilities</h3>
                <p className="text-gray-600">Discover security weaknesses before malicious hackers can exploit them.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Compliance Requirements</h3>
                <p className="text-gray-600">Meet regulatory compliance requirements and avoid costly penalties.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Build Customer Trust</h3>
                <p className="text-gray-600">
                  Demonstrate your commitment to security and build trust with your customers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Improve Security Posture</h3>
                <p className="text-gray-600">Enhance your overall security strategy with actionable recommendations.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Prevent Data Breaches</h3>
                <p className="text-gray-600">Protect sensitive data and prevent costly data breaches and leaks.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Detailed Reporting</h3>
                <p className="text-gray-600">Receive comprehensive reports with clear remediation steps.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testing Types Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Testing Methodologies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer different types of penetration testing to suit your specific security needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">White Box Testing</h3>
                <p className="text-gray-600 mb-4">
                  
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Full system knowledge: Testers know how the system works inside.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Comprehensive code review: Every part of the code is checked carefully.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Detailed vulnerability analysis: Looks for any weak spots or bugs in the system.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-secondary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Gray Box Testing</h3>
                <p className="text-gray-600 mb-4">
                  
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Partial system knowledge: Testers know some internal details, but not everything.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Authenticated testing: Testing is done with user-level access.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Efficient vulnerability discovery: Helps find security issues quickly and effectively.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Black Box Testing</h3>
                <p className="text-gray-600 mb-4">
                  
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Zero system knowledge: Testers don’t know how the system works inside.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Real-world attack simulation: Mimics how a real attacker would try to break in.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span>External vulnerability assessment: Focuses on finding weaknesses from the outside.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose StarInfoSec</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              We're committed to providing exceptional cybersecurity services tailored to your business needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-blue-100">Certified security professionals with years of industry experience.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Thorough Testing</h3>
              <p className="text-blue-100">Comprehensive methodology that leaves no stone unturned.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Detailed Reports</h3>
              <p className="text-blue-100">Clear, actionable reports with prioritized remediation steps.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-blue-100">We're with you every step of the way, even after testing is complete.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
  <div className="container">
    <div className="bg-primary rounded-xl p-8 md:p-12 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Business?</h2>
      <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
        Contact us today to schedule a consultation and learn how our penetration testing services can protect
        your business.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-100">
          <Link href="/contact">Get Started</Link>
        </Button>
        <Button asChild size="lg" className="bg-green-500 text-white hover:bg-green-600">
          <Link href="https://wa.me/918669361239" target="_blank" rel="noopener noreferrer">
            Chat on WhatsApp
          </Link>
        </Button>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
