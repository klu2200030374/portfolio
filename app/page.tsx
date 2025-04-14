import Image from "next/image"
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  GraduationCap,
  Briefcase,
  Award,
  Download,
  Database,
  Cloud,
  Globe,
  Heart,
  BookOpen,
  Building,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimatedSection from "@/components/animated-section"
import TypewriterText from "@/components/typewriter-text"
import SkillBar from "@/components/skill-bar"
import ParticleBackground from "@/components/particle-background"
import ContactForm from "@/components/contact-form"
import NavLink from "@/components/nav-link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/70 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Durgaprasad Reddy</h1>
          <nav className="hidden md:flex space-x-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#internships">Internships</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      {/* Hero Section - Added padding-top to account for fixed header */}
      <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-32 container mx-auto px-4 relative">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-500 to-purple-600 text-transparent bg-clip-text animate-pulse">
              Thonduru Durgaprasad Reddy
            </h1>
            <div className="text-xl md:text-2xl text-gray-400 mb-8 h-12">
              <TypewriterText texts={["Student & Aspiring Cloud Enthusiast", "Web Developer"]} />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Badge className="px-4 py-2 text-sm bg-emerald-900/30 hover:bg-emerald-900/50 text-emerald-300 transition-all duration-300 transform hover:scale-105">
                Cloud Computing
              </Badge>
              <Badge className="px-4 py-2 text-sm bg-purple-900/30 hover:bg-purple-900/50 text-purple-300 transition-all duration-300 transform hover:scale-105">
                Web Development
              </Badge>
              <Badge className="px-4 py-2 text-sm bg-amber-900/30 hover:bg-amber-900/50 text-amber-300 transition-all duration-300 transform hover:scale-105">
                Full Stack
              </Badge>
              <Badge className="px-4 py-2 text-sm bg-rose-900/30 hover:bg-rose-900/50 text-rose-300 transition-all duration-300 transform hover:scale-105">
                Automation
              </Badge>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                className="gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-glow-primary bg-emerald-600 hover:bg-emerald-700"
                asChild
              >
                <a href="https://github.com/klu2200030374" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                className="gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-glow-white"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/thonduru-durgaprasad-reddy-122770286/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="border-b-2 border-emerald-500 pb-2">About Me</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              <div className="space-y-6">
                <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-emerald-500">
                  <Image
                    src="/images/profile-photo.png"
                    alt="Thonduru Durgaprasad Reddy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                  Hello, I'm <span className="text-emerald-500">Durgaprasad Reddy</span>
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate student and aspiring cloud enthusiast with a strong interest in web development and
                  cloud computing. I love building innovative solutions that solve real-world problems.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My career objective is to secure an entry-level position in a reputable organization where I can
                  leverage my academic knowledge, technical skills, and problem-solving abilities to drive innovation,
                  contribute to the institution's growth, and continuously enhance my professional expertise in a
                  dynamic and challenging environment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="text-emerald-500" />
                    <span>Computer Science Student</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="text-emerald-500" />
                    <span>Seeking Cloud Opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code className="text-emerald-500" />
                    <span>Full-Stack Developer</span>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button
                    className="gap-2 transition-all duration-300 hover:scale-105 bg-emerald-600 hover:bg-emerald-700"
                    asChild
                  >
                    <a href="/Durgaprasad_2200030374.pdf" download="Thonduru_Durgaprasad_Reddy_Resume.pdf">
                      Download Resume <Download size={16} />
                    </a>
                  </Button>
                  <Button variant="outline" className="gap-2 transition-all duration-300 hover:scale-105" asChild>
                    <a href="https://github.com/klu2200030374" target="_blank" rel="noopener noreferrer">
                      <Github size={16} /> GitHub Profile
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="border-b-2 border-emerald-500 pb-2">Education</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Bachelor's */}
              <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all duration-500 transform hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-900/30 p-3 rounded-full">
                      <BookOpen className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                      <CardTitle>Bachelor of Technology in Computer Science and Engineering</CardTitle>
                      <CardDescription>Cloud and Edge Computing</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-between">
                    <div>
                      <p className="text-gray-400">KL University, Guntur</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-gray-400">2022 - 2026</p>
                      <p className="text-emerald-400 font-medium">CGPA: 9.19</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Intermediate */}
              <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all duration-500 transform hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-900/30 p-3 rounded-full">
                      <BookOpen className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <CardTitle>Intermediate Education</CardTitle>
                      <CardDescription>Science Stream</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-between">
                    <div>
                      <p className="text-gray-400">R.K Vidyalaya Junior College, Chittoor</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-gray-400">2020 - 2022</p>
                      <p className="text-purple-400 font-medium">CGPA: 6.0</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Secondary */}
              <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all duration-500 transform hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-900/30 p-3 rounded-full">
                      <BookOpen className="h-6 w-6 text-amber-500" />
                    </div>
                    <div>
                      <CardTitle>Secondary Education</CardTitle>
                      <CardDescription>High School</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-between">
                    <div>
                      <p className="text-gray-400">Z.P High School, 49 Kotapalli mitta</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-gray-400">2019 - 2020</p>
                      <p className="text-amber-400 font-medium">CGPA: 8.7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="border-b-2 border-emerald-500 pb-2">Internships</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Internship 1 */}
              <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all duration-500 transform hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-900/30 p-3 rounded-full">
                      <Building className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                      <CardTitle>AWS Cloud Virtual Internship</CardTitle>
                      <CardDescription>AICTE-Eduskills</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-between mb-4">
                    <div>
                      <p className="text-gray-400">Online</p>
                    </div>
                    <div>
                      <p className="text-gray-400">May - July 2024</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Gained hands-on experience in cloud computing, virtual machine deployments, and cloud security.
                  </p>
                </CardContent>
              </Card>

              {/* Internship 2 */}
              <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all duration-500 transform hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-900/30 p-3 rounded-full">
                      <Building className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <CardTitle>Zero Trust Cloud Security Virtual Internship</CardTitle>
                      <CardDescription>AICTE-Eduskills</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-between mb-4">
                    <div>
                      <p className="text-gray-400">Online</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Aug - Sep 2024</p>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Explored security architectures, access control models, and risk assessment methodologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="border-b-2 border-emerald-500 pb-2">Technical Skills</span>
            </h2>

            {/* Programming Languages */}
            <div className="mb-16 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Code className="text-emerald-500" /> Programming Languages
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <SkillBar skill="Python" percentage={80} color="green" />
                  <SkillBar skill="Java" percentage={75} color="orange" />
                </div>
                <div className="space-y-6">
                  <SkillBar skill="C" percentage={70} color="purple" />
                  <SkillBar skill="SQL" percentage={80} color="blue" />
                </div>
              </div>
            </div>

            {/* Web Technologies */}
            <div className="mb-16 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Globe className="text-emerald-500" /> Web Technologies
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <SkillBar skill="JavaScript" percentage={50} color="blue" />
                  <SkillBar skill="HTML/CSS" percentage={50} color="purple" />
                  <SkillBar skill="Bootstrap" percentage={50} color="purple" />
                </div>
                <div className="space-y-6">
                  <SkillBar skill="React.js" percentage={55} color="blue" />
                  <SkillBar skill="Node.js" percentage={40} color="green" />
                  <SkillBar skill="Spring Boot" percentage={70} color="green" />
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="mb-16 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Cloud className="text-emerald-500" /> Cloud & DevOps
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <SkillBar skill="AWS" percentage={70} color="orange" />
                  <SkillBar skill="Virtualization" percentage={65} color="blue" />
                </div>
                <div className="space-y-6">
                  <SkillBar skill="Git/GitHub" percentage={80} color="purple" />
                  <SkillBar skill="REST APIs" percentage={75} color="green" />
                </div>
              </div>
            </div>

            {/* Databases */}
            <div className="mb-16 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Database className="text-emerald-500" /> Databases
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <SkillBar skill="MongoDB" percentage={50} color="green" />
                </div>
                <div className="space-y-6">
                  <SkillBar skill="MySQL" percentage={50} color="blue" />
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Heart className="text-emerald-500" /> Soft Skills
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <SkillBar skill="Problem Solving" percentage={70} color="blue" />
                  <SkillBar skill="Self-learning" percentage={85} color="green" />
                </div>
                <div className="space-y-6">
                  <SkillBar skill="Presentation" percentage={60} color="purple" />
                  <SkillBar skill="Time Management" percentage={80} color="red" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="border-b-2 border-emerald-500 pb-2">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all duration-500 transform hover:scale-105 hover:shadow-glow-primary">
                <CardHeader>
                  <CardTitle>Online Social Media Platform</CardTitle>
                  <CardDescription>Python Full Stack</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gradient-to-br from-emerald-900/40 to-purple-900/40 rounded-md flex items-center justify-center mb-4 overflow-hidden group">
                    <img
                      src="/images/social-media.jpeg"
                      alt="Social Media Platform Preview"
                      className="h-full w-full object-cover rounded-md opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                    />
                  </div>
                  <p className="text-gray-400">
                    Daily and weekly updated insights tracking user engagement, posts, and interactions on the social
                    media platform. Tracking world-wide cases using google maps and live API stats and datasets.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Django</Badge>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="gap-1 transition-all duration-300 hover:text-emerald-500"
                    asChild
                  >
                    <a href="https://github.com/klu2200030374/SocialMedia2" target="_blank" rel="noopener noreferrer">
                      View <ExternalLink size={14} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 2 */}
              <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all duration-500 transform hover:scale-105 hover:shadow-glow-primary">
                <CardHeader>
                  <CardTitle>Hospital Management System</CardTitle>
                  <CardDescription>MERN Stack</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gradient-to-br from-green-900/40 to-blue-900/40 rounded-md flex items-center justify-center mb-4 overflow-hidden group">
                    <img
                      src="/images/hospital.jpeg"
                      alt="Hospital Management System Preview"
                      className="h-full w-full object-cover rounded-md opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                    />
                  </div>
                  <p className="text-gray-400">
                    A React-based web application for efficient hospital management and patient care. Used role-based
                    access control to manage hospital data and ensure secure patient records.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline">MongoDB</Badge>
                    <Badge variant="outline">React</Badge>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="gap-1 transition-all duration-300 hover:text-emerald-500"
                    asChild
                  >
                    <a href="https://github.com/klu2200030374/hms" target="_blank" rel="noopener noreferrer">
                      View <ExternalLink size={14} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 3 */}
              <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all duration-500 transform hover:scale-105 hover:shadow-glow-primary">
                <CardHeader>
                  <CardTitle>Indian Heritage and Culture</CardTitle>
                  <CardDescription>Java Full Stack</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-40 bg-gradient-to-br from-orange-900/40 to-red-900/40 rounded-md flex items-center justify-center mb-4 overflow-hidden group">
                    <img
                      src="/images/indian-heritage.jpeg"
                      alt="Indian Heritage Project Preview"
                      className="h-full w-full object-cover rounded-md opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                    />
                  </div>
                  <p className="text-gray-400">
                    A website-based platform showcasing Indian heritage and culture, featuring virtual tours and
                    interactive content. Used immersive technology to bring Indian heritage and culture to life.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Badge variant="outline">Java</Badge>
                    <Badge variant="outline">Spring Boot</Badge>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="gap-1 transition-all duration-300 hover:text-emerald-500"
                    asChild
                  >
                    <a
                      href="https://github.com/klu2200030374/JFSD-SDP-FRONTEND"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View <ExternalLink size={14} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="border-b-2 border-emerald-500 pb-2">Certifications</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Certification 1 */}
              <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all duration-500 transform hover:scale-105 hover:shadow-glow-primary">
                <CardHeader className="pb-2">
                  <div className="mb-2 text-red-400">
                    <Award className="h-8 w-8 mb-2 animate-bounce-slow" />
                  </div>
                  <CardTitle className="text-xl">RedHat Certified Enterprise Application Developer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Red Hat Certified Engineer certification demonstrating Linux system administration skills.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Badge className="bg-red-900/30 text-red-300 hover:bg-red-900/50">RedHat</Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="gap-1 transition-all duration-300 hover:text-emerald-500"
                    asChild
                  >
                    <a
                      href="https://www.credly.com/badges/96fa649f-5ed7-461b-9ff0-e390c27dc3d6/public_url"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify <ExternalLink size={14} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Certification 2 */}
              <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all duration-500 transform hover:scale-105 hover:shadow-glow-primary">
                <CardHeader className="pb-2">
                  <div className="mb-2 text-blue-400">
                    <Award className="h-8 w-8 mb-2 animate-bounce-slow" style={{ animationDelay: "0.2s" }} />
                  </div>
                  <CardTitle className="text-xl">Salesforce AI Associate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Certification in Salesforce AI capabilities and implementation strategies.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Badge className="bg-blue-900/30 text-blue-300 hover:bg-blue-900/50">Salesforce</Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="gap-1 transition-all duration-300 hover:text-emerald-500"
                    asChild
                  >
                    <a
                      href="https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=+R4Wu4trmcL7mEcIMO7pkRDjPN6qYmeU9RVMaty1IFqW+BkxD7RIwxjVINbCJ4wi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify <ExternalLink size={14} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Certification 3 */}
              <Card className="bg-gray-900 border-gray-800 hover:border-emerald-500 transition-all duration-500 transform hover:scale-105 hover:shadow-glow-primary">
                <CardHeader className="pb-2">
                  <div className="mb-2 text-purple-400">
                    <Award className="h-8 w-8 mb-2 animate-bounce-slow" style={{ animationDelay: "0.4s" }} />
                  </div>
                  <CardTitle className="text-xl">Automation Anywhere Certified Essentials RPA Professional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Robotic Process Automation fundamentals and implementation techniques.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Badge className="bg-purple-900/30 text-purple-300 hover:bg-purple-900/50">Automation</Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="gap-1 transition-all duration-300 hover:text-emerald-500"
                    asChild
                  >
                    <a
                      href="https://certificates.automationanywhere.com/0d6e9049-3d55-45c9-bcd9-5504956f227b#acc.azGdubHm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify <ExternalLink size={14} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="border-b-2 border-emerald-500 pb-2">Get In Touch</span>
            </h2>
            <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg border border-gray-800 shadow-lg">
              <div className="grid gap-6 md:grid-cols-2 mb-8">
                <div className="flex items-center gap-3 p-4 rounded-md bg-gray-800/50 transition-all duration-300 hover:bg-gray-800 hover:shadow-md">
                  <div className="bg-emerald-900/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Email</h3>
                    <a
                      href="mailto:2200030374cseh@gmail.com"
                      className="text-white hover:text-emerald-500 transition-colors"
                    >
                      2200030374cseh@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-md bg-gray-800/50 transition-all duration-300 hover:bg-gray-800 hover:shadow-md">
                  <div className="bg-emerald-900/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-400">Phone</h3>
                    <a href="tel:+916304266067" className="text-white hover:text-emerald-500 transition-colors">
                      +91 6304266067
                    </a>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Thonduru Durgaprasad Reddy. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/klu2200030374"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-500 transition-colors transform hover:scale-125"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/thonduru-durgaprasad-reddy-122770286/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-500 transition-colors transform hover:scale-125"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:2200030374cseh@gmail.com"
              className="text-gray-400 hover:text-emerald-500 transition-colors transform hover:scale-125"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
