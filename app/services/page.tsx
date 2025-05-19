import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Shield, Users, BookOpen, CheckCircle, AlertTriangle, Clock, FileText } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive cybersecurity solutions tailored for small businesses and startups.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Custom Security Solutions</h2>
              <p className="text-lg text-gray-700 mb-4">
                At StarInfoSec, we help small businesses and startups with affordable, easy-to-understand cybersecurity solutions. Our team offers services like penetration testing, staff training, and security advice to protect your digital assets. We also provide clear steps and ongoing support to help you stay secure.
              </p>
              <p className="text-lg text-gray-700 mb-4">
               
              </p>
              <p className="text-lg text-gray-700">
                
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image src="/service.jpg" alt="StarInfoSec Services" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Web App Penetration Testing */}
      <section id="webapp" className="py-16 bg-blue-50">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] order-last md:order-first">
              <Image
                src="/web.png"
                alt="Web Application Penetration Testing"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 text-sm mb-4">
                Core Service
              </div>
              <h2 className="text-3xl font-bold mb-6">Web Application Penetration Testing</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our web application penetration testing finds security issues in your web apps before hackers do.
We use both tools and hands-on methods to check for common threats, including those in the OWASP Top 10 list.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">SQL Injection</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">XSS Vulnerabilities</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">CSRF Attacks</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Authentication Flaws</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Access Control Issues</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Security Misconfigurations</span>
                </div>
              </div>

              <Button asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Training */}
      <section id="training" className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 text-sm mb-4">
                Core Service
              </div>
              <h2 className="text-3xl font-bold mb-6">Cybersecurity Training</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our cybersecurity training programs are designed to equip your technical team with the knowledge and skills they need to build, maintain, and defend secure systems.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Basics of Cybersecurity</h3>
                        <p className="text-sm text-gray-600">For employes and engineers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Globe className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Web Security</h3>
                        <p className="text-sm text-gray-600">OWASP Top 10 and beyond</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <AlertTriangle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Threat Modeling</h3>
                        <p className="text-sm text-gray-600">Identifying security risks</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Incident Response</h3>
                        <p className="text-sm text-gray-600">Handling security breaches</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button asChild>
                <Link href="/contact">Explore Training Options</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/train.jpeg"
                alt="Cybersecurity Training"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Employee Security Awareness */}
      <section id="employee" className="py-16 bg-blue-50">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[400px] order-last md:order-first">
              <Image
                src="/awareness.png"
                alt="Employee Security Awareness Training"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 text-sm mb-4">
                Core Service
              </div>
              <h2 className="text-3xl font-bold mb-6">Employee Security Awareness</h2>
              <p className="text-lg text-gray-700 mb-4">
                Your employees are your biggest strength—but they can also be a security risk. Our security awareness training helps turn them into your first line of defense against cyber threats. With simple, hands-on sessions and fake phishing tests, we teach them how to spot and handle common security dangers.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <Users className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Interactive Workshops</h3>
                    <p className="text-sm text-gray-600">
                      Engaging sessions that make security concepts accessible to all employees.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Hands-On Exercises</h3>
                    <p className="text-sm text-gray-600"> Practical simulations of vulnerability assessments </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <AlertTriangle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Phishing Simulations</h3>
                    <p className="text-sm text-gray-600">Safe, controlled tests to measure and improve awareness.</p>
                  </div>
                </div>
              </div>

              <Button asChild>
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Consulting */}
      <section id="consulting" className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary font-medium rounded-full px-4 py-1 text-sm mb-4">
                Core Service
              </div>
              <h2 className="text-3xl font-bold mb-6">Security Consulting</h2>
              <p className="text-lg text-gray-700 mb-4">
                We offer expert advice to help you create and follow strong security plans that fit your business goals. Our consultants work with your team to build a solid security system, from setting up programs to meeting rules, ensuring your business stays safe and can grow smoothly.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold flex items-center gap-2 mb-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Security Program Development</span>
                  </h3>
                  <p className="text-gray-600 pl-7">
                    Building comprehensive security programs tailored to your business needs and risk profile.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold flex items-center gap-2 mb-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Compliance Guidance</span>
                  </h3>
                  <p className="text-gray-600 pl-7">
                    Navigating complex regulatory requirements such as GDPR, CCPA, HIPAA, and PCI DSS.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    <span>Risk Assessment</span>
                  </h3>
                  <p className="text-gray-600 pl-7">
                    Identifying and prioritizing security risks based on your specific business context.
                  </p>
                </div>
              </div>

              <Button asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/consultant.png"
                alt="Security Consulting"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A transparent, collaborative approach to delivering exceptional security services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
            
              {/* Process Steps */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2"></div>

              <div className="space-y-12">
                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="hidden md:block absolute right-0 top-6 w-6 h-6 rounded-full bg-primary -translate-y-1/2 translate-x-1/2 z-10"></div>
                    <h3 className="text-xl font-semibold mb-2">1. Initial Consultation</h3>
                    <p className="text-gray-600">
                      We start by understanding your security needs, business goals, and challenges to make sure our services fit you perfectly.
                    </p>
                  </div>
                  <div className="relative h-[200px] md:order-first order-last">
                    <Image src="/p1.jpeg" alt="Initial Consultation" fill className="object-cover rounded-lg" />
                  </div>
                </div>

                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[200px]">
                    <Image src="/p.jpg" alt="Proposal and Planning" fill className="object-cover rounded-lg" />
                  </div>
                  <div>
                    <div className="hidden md:block absolute left-0 top-6 w-6 h-6 rounded-full bg-primary -translate-y-1/2 -translate-x-1/2 z-10"></div>
                    <h3 className="text-xl font-semibold mb-2">2. Proposal and Planning</h3>
                    <p className="text-gray-600">
                      Based on our initial consultation, we develop a detailed proposal outlining the scope,
                      methodology, timeline, and deliverables for your security engagement.
                    </p>
                  </div>
                </div>

                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="hidden md:block absolute right-0 top-6 w-6 h-6 rounded-full bg-primary -translate-y-1/2 translate-x-1/2 z-10"></div>
                    <h3 className="text-xl font-semibold mb-2">3. Service Execution</h3>
                    <p className="text-gray-600">
                      Our security team carries out the plan and keeps you updated with regular progress and important findings.
                    </p>
                  </div>
                  <div className="relative h-[200px] md:order-first order-last">
                    <Image src="/p2.jpeg" alt="Service Execution" fill className="object-cover rounded-lg" />
                  </div>
                </div>

                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[200px]">
                    <Image
                      src="/p4.jpg"
                      alt="Reporting and Recommendations"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="hidden md:block absolute left-0 top-6 w-6 h-6 rounded-full bg-primary -translate-y-1/2 -translate-x-1/2 z-10"></div>
                    <h3 className="text-xl font-semibold mb-2">4. Reporting and Recommendations</h3>
                    <p className="text-gray-600">
                      We deliver comprehensive reports detailing our findings, including clear, prioritized
                      recommendations for addressing any identified vulnerabilities or security gaps.
                    </p>
                  </div>
                </div>

                <div className="relative grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <div className="hidden md:block absolute right-0 top-6 w-6 h-6 rounded-full bg-primary -translate-y-1/2 translate-x-1/2 z-10"></div>
                    <h3 className="text-xl font-semibold mb-2">5. Follow-up Support</h3>
                    <p className="text-gray-600">
                      Our engagement doesn't end with the delivery of reports. We provide ongoing support to help you
                      implement our recommendations and address any questions that arise.
                    </p>
                  </div>
                  <div className="relative h-[200px] md:order-first order-last">
                    <Image src="/p5.jpeg" alt="Follow-up Support" fill className="object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Strengthen Your Security?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us today to discuss your security needs and discover how our services can help protect your
              business.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-100">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
