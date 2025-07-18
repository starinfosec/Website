import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Target, Shield, Users, Lightbulb } from "lucide-react"

export default function MissionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-blue-100">
              Helping small businesses and startups stay secure with top-level AI-powered cybersecurity solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission Statement</h2>
              <p className="text-lg text-gray-700 mb-4">
                StarInfoSec's mission is to make top-level cybersecurity accessible to small businesses and startups—offering protection that was once only available to large enterprises. We deliver comprehensive, easy-to-use solutions that meet the unique needs of growing businesses in today’s complex threat landscape. Through our penetration testing, training, and consulting services, we not only help identify and fix vulnerabilities but also empower our clients with the knowledge and tools to build a strong, lasting security culture.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                
              </p>
              <p className="text-lg text-gray-700">
                
              </p>
            </div>
            <div className="relative h-[400px]">
              <Image src="/mission.jpg" alt="StarInfoSec Mission" fill className="object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="py-16 bg-blue-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Objectives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The key goals that drive our daily operations and long-term strategy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Protect</h3>
              <p className="text-gray-600">
                Find and fix security weaknesses before attackers can exploit them, protecting our clients' data, reputation, and customer trust.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Educate</h3>
              <p className="text-gray-600">
                Give organizations the knowledge and skills to spot security threats and follow best practices, building a strong culture of security awareness across all levels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovate</h3>
              <p className="text-gray-600">
                Keep improving our methods and tools to tackle new threats, so our clients stay protected now and in the future.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaborate</h3>
              <p className="text-gray-600">
                Work closely with our clients as trusted security partners, understanding their unique business needs
                and tailoring our solutions to align with their goals and constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Fulfill Our Mission */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Fulfill Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The practical ways we work to achieve our mission every day.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Comprehensive Security Testing</h3>
              <p className="text-gray-700 mb-4">
                We conduct thorough penetration tests that go beyond automated scanning, using a combination of
                industry-standard tools and custom methodologies to identify vulnerabilities that others might miss.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Web application penetration testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Social Engineering Tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Vulnerability Assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Cloud infrastructure security reviews</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Customized Security Training</h3>
              <p className="text-gray-700 mb-4">
                We develop and deliver customized training programs that address the specific security challenges faced
                by small businesses, making complex security concepts accessible to technical and non-technical staff
                alike.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Security awareness training for all employees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Hands-On Exercises </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Continuous Improvement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Simulated phishing campaigns</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Strategic Security Consulting</h3>
              <p className="text-gray-700 mb-4">
                We provide expert guidance on developing and implementing security strategies that align with business
                objectives, helping our clients make informed decisions about security investments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Security program development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Risk Assessment & Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Security policy development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Incident response planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-primary">Ongoing Security Support</h3>
              <p className="text-gray-700 mb-4">
                We maintain long-term relationships with our clients, providing continuous support and guidance as their
                security needs evolve with their business growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Regular security assessments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Vulnerability management assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Security advisory services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </span>
                  <span className="text-gray-700">Emergency incident response</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Partner with Us in Our Mission</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the hundreds of small businesses and startups that have strengthened their security posture with
              StarInfoSec.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-100">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
