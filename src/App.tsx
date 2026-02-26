import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, ChevronDown, Cpu, BrainCircuit, GraduationCap, Award, Terminal, Code2, Sun, Moon, Linkedin, MessageCircle, Github } from 'lucide-react';

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-24 px-6 md:px-12 max-w-7xl mx-auto ${className || ''}`}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15 } }
      }}
    >
      {children}
    </motion.div>
  </section>
);

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const skillsData = [
  { name: "Machine Learning", value: 95, icon: <BrainCircuit className="w-5 h-5" /> },
  { name: "Robotics", value: 87, icon: <Cpu className="w-5 h-5" /> },
  { name: "Data Analysis", value: 73, icon: <Terminal className="w-5 h-5" /> },
  { name: "Deep Learning", value: 90, icon: <BrainCircuit className="w-5 h-5" /> },
  { name: "Neural Networks", value: 88, icon: <BrainCircuit className="w-5 h-5" /> },
  { name: "NLP", value: 92, icon: <Code2 className="w-5 h-5" /> },
  { name: "Computer Vision", value: 85, icon: <Code2 className="w-5 h-5" /> },
  { name: "Python", value: 95, icon: <Terminal className="w-5 h-5" /> },
  { name: "C++", value: 85, icon: <Terminal className="w-5 h-5" /> },
  { name: "SQL", value: 80, icon: <Terminal className="w-5 h-5" /> },
  { name: "Keras", value: 88, icon: <Code2 className="w-5 h-5" /> },
  { name: "PyTorch", value: 90, icon: <Code2 className="w-5 h-5" /> }
];

const trainings = [
  { title: "Machine Learning Track", issuer: "National Telecommunication Institute (NTI)" },
  { title: "Artificial Intelligence Track", issuer: "National Telecommunication Institute (NTI) and Huawei" },
  { title: "Digital Egypt Pioneer (DEPI)", issuer: "Egyptian Ministry of Communications" },
  { title: "Deep Learning Track", issuer: "Nvidia" },
  { title: "Machine Learning Track", issuer: "Microsoft and Sprints" }
];

const projects = [
  {
    title: "e3raab.com",
    description: "A smart, automated grammatical analyzer designed specifically for the Arabic language. The project leverages artificial intelligence to perform I'rab, allowing users to input Arabic text and receive an immediate structural analysis of the sentences.",
    tags: ["AI", "NLP", "Arabic", "Machine Learning"]
  },
  {
    title: "Cheating Detector for Online Exams",
    description: "A machine learning and deep learning-based solution designed to detect cheating during online exams. Analyzes behavioral patterns, keystroke dynamics, and facial recognition.",
    tags: ["Machine Learning", "Deep Learning", "Computer Vision"]
  },
  {
    title: "Smart Water Filter",
    description: "Developed a smart filtration system that detects water quality in real-time and redirects unsafe water for irrigation.",
    tags: ["IoT", "Sensors", "Automation"]
  },
  {
    title: "Diabetes Prediction",
    description: "Developed a system that predicts the risk of diabetes based on medical data, helping in early diagnosis and prevention.",
    tags: ["Machine Learning", "Data Analysis"]
  },
  {
    title: "Electric Vacuum Cleaner with AI",
    description: "Integrated AI and machine learning into a vacuum cleaner, enabling it to autonomously navigate spaces and optimize cleaning efficiency.",
    tags: ["AI", "Robotics", "Automation"]
  },
  {
    title: "HelpBot",
    description: "A fully AI-powered robot designed to sense dangerous gases or flames. Automatically extinguishes flames and calls emergency services using a built-in SIM card.",
    tags: ["AI", "Robotics", "Hardware"]
  },
  {
    title: "Auto Irrigation System",
    description: "Created an automated irrigation system that uses sensors to monitor moisture levels and optimize water usage for plants.",
    tags: ["Automation", "Sensors"]
  },
  {
    title: "Piezoelectric Electric Generator",
    description: "Designed a generator that harnesses piezoelectric materials to generate electricity from pressure when a car drives over it.",
    tags: ["Hardware", "Energy"]
  },
  {
    title: "EV3 Robot",
    description: "Developed an EV3 robot that secured 1st place in Egypt’s FIRST LEGO League, showcasing my skills in programming and robotics.",
    tags: ["Robotics", "Programming", "Award Winner"]
  }
];

const SkillCard = ({ skill }: { skill: typeof skillsData[0] }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      layout
      variants={itemVariant}
      onClick={() => setIsOpen(!isOpen)}
      className={`cursor-pointer border rounded-2xl p-5 transition-all duration-300 ${
        isOpen 
          ? 'bg-white dark:bg-zinc-800/80 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)]' 
          : 'bg-zinc-50 dark:bg-white/5 border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-white/20 hover:bg-zinc-100 dark:hover:bg-white/10'
      }`}
    >
      <motion.div layout className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg transition-colors ${isOpen ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-zinc-200 dark:bg-white/5 text-zinc-600 dark:text-zinc-400'}`}>
            {skill.icon}
          </div>
          <span className={`font-semibold transition-colors ${isOpen ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-700 dark:text-zinc-300'}`}>
            {skill.name}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-400 dark:text-zinc-500'}`} />
        </motion.div>
      </motion.div>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-5 pt-5 border-t border-zinc-200 dark:border-white/10 overflow-hidden"
        >
          <div className="flex justify-between text-sm mb-3">
            <span className="text-zinc-500 dark:text-zinc-400 font-medium">Proficiency Level</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">{skill.value}%</span>
          </div>
          <div className="h-2 bg-zinc-200 dark:bg-black/50 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${skill.value}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 dark:from-emerald-500 dark:to-cyan-500 rounded-full relative"
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#050505] text-zinc-600 dark:text-zinc-400 font-sans selection:bg-emerald-500/30 overflow-x-hidden transition-colors duration-300">
      
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff11_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-50/80 to-zinc-50 dark:via-[#050505]/80 dark:to-[#050505]" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-zinc-200 dark:border-white/5 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="text-zinc-900 dark:text-zinc-100 font-bold tracking-wider uppercase text-sm">Amr Mohamed</span>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</a>
              <a href="#skills" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Skills</a>
              <a href="#education" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Education</a>
              <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</a>
              
              <button 
                onClick={() => setIsDark(!isDark)} 
                className="p-2 rounded-full bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <Sun className="w-4 h-4 text-zinc-400 hover:text-zinc-100" /> : <Moon className="w-4 h-4 text-zinc-600 hover:text-zinc-900" />}
              </button>
            </div>
            
            {/* Mobile theme toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsDark(!isDark)} 
                className="p-2 rounded-full bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors"
              >
                {isDark ? <Sun className="w-4 h-4 text-zinc-400" /> : <Moon className="w-4 h-4 text-zinc-600" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center pt-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_rgba(16,185,129,0.05)_0%,_transparent_60%)]" />
          
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-6 order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 shadow-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">Available for work</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-[1.1]">
                Amr Mohamed <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400">
                  Taher
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light max-w-lg">
                Artificial Intelligence Engineer & Robotics Expert
              </p>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <a href="#contact" className="px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium rounded-lg hover:bg-zinc-800 dark:hover:bg-white transition-colors shadow-lg">
                  Get in touch
                </a>
                <a href="#projects" className="px-6 py-3 bg-white dark:bg-white/5 text-zinc-900 dark:text-zinc-100 font-medium rounded-lg hover:bg-zinc-50 dark:hover:bg-white/10 transition-colors border border-zinc-200 dark:border-white/10 shadow-sm">
                  View work
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto lg:ml-auto order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-white/10 relative z-10 shadow-2xl">
                {/* Note: Place your image in the public folder as 'profile.jpg' */}
                <img 
                  src="/profile.jpg" 
                  alt="Amr Mohamed Taher" 
                  className="w-full h-full object-cover filter hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
          >
            <ChevronDown className="w-6 h-6 text-zinc-400 dark:text-zinc-500" />
          </motion.div>
        </section>

        {/* About */}
        <div className="bg-white dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-white/5 transition-colors duration-300">
          <Section id="about">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-4">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">About Me</h2>
                <div className="w-12 h-1 bg-emerald-500 mt-4 rounded-full" />
              </div>
              <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                <motion.p variants={itemVariant}>
                  I’m Amr Mohamed, 20 years old, an AI Engineer and Robotics Expert with a strong passion for artificial intelligence, data analysis, robotics, and cutting-edge technology. 
                </motion.p>
                <motion.p variants={itemVariant}>
                  With experience in multiple programming languages, including C++, Python, and AI frameworks, I specialize in building intelligent, efficient, and scalable systems.
                </motion.p>
                <motion.p variants={itemVariant}>
                  My work spans AI-driven solutions, robotics applications, and automation, allowing me to tackle diverse challenges and deliver impactful innovations that push the boundaries of technology.
                </motion.p>
              </div>
            </div>
          </Section>
        </div>

        {/* Skills */}
        <Section id="skills">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Technical Arsenal</h2>
            <p className="text-zinc-500 dark:text-zinc-400">Click on any skill to reveal proficiency levels and details.</p>
            <div className="w-12 h-1 bg-emerald-500 mt-6 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsData.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </Section>

        {/* Education */}
        <div className="bg-white dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-white/5 transition-colors duration-300">
          <Section id="education">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Education</h2>
              <div className="w-12 h-1 bg-emerald-500 mt-4 rounded-full" />
            </div>

            <motion.div variants={itemVariant} className="p-8 md:p-10 bg-zinc-50 dark:bg-[#050505] border border-zinc-200 dark:border-white/5 rounded-3xl relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500 shadow-xl dark:shadow-2xl">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-500 to-cyan-500" />
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
              
              <GraduationCap className="w-12 h-12 text-emerald-500 dark:text-emerald-400 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">New Mansoura University (NMU)</h3>
              <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 font-medium">College of Computer Science and Engineering</p>
              <p className="text-zinc-500 mt-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Department of Artificial Intelligence Engineering
              </p>
            </motion.div>
          </Section>
        </div>

        {/* Training & Certifications */}
        <Section id="training">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Certifications & Training</h2>
            <div className="w-12 h-1 bg-emerald-500 mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {trainings.map((training, i) => (
              <motion.div 
                key={i} 
                variants={itemVariant} 
                className="p-6 bg-white dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 rounded-2xl flex gap-5 items-center hover:bg-zinc-50 dark:hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all duration-300 group shadow-sm"
              >
                <div className="p-4 bg-zinc-100 dark:bg-black/40 rounded-xl shrink-0 border border-zinc-200 dark:border-white/5 group-hover:border-emerald-500/30 transition-colors">
                  <Award className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg leading-tight mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">{training.title}</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{training.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <div className="bg-white dark:bg-zinc-900/30 border-y border-zinc-200 dark:border-white/5 transition-colors duration-300">
          <Section id="projects">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Professional Projects</h2>
              <div className="w-12 h-1 bg-emerald-500 mt-4 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <motion.div 
                  key={i}
                  variants={itemVariant}
                  whileHover={{ y: -8 }}
                  className="group relative p-8 bg-zinc-50 dark:bg-[#050505] rounded-3xl border border-zinc-200 dark:border-white/5 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden flex flex-col h-full shadow-lg dark:shadow-xl"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow leading-relaxed text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1.5 bg-white dark:bg-white/5 rounded-full text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/5 group-hover:border-emerald-500/20 transition-colors shadow-sm dark:shadow-none">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>

        {/* Contact */}
        <Section id="contact">
          <motion.div variants={itemVariant} className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">Let's Work Together</h2>
            <p className="text-zinc-500 dark:text-zinc-400 mb-12 text-lg">
              I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="https://wa.me/qr/WVXHQAQ7AFQJP1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#1ebd57] transition-colors w-full sm:w-auto justify-center shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5" />
                +20 102 346 2890
              </a>
              <a 
                href="https://www.linkedin.com/in/amr-mohamedd-"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-[#0A66C2] text-white rounded-full font-medium hover:bg-[#004182] transition-colors w-full sm:w-auto justify-center shadow-lg shadow-[#0A66C2]/20"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/Amrr13"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-[#24292e] dark:bg-white dark:text-zinc-900 text-white rounded-full font-medium hover:bg-[#1b1f23] dark:hover:bg-zinc-200 transition-colors w-full sm:w-auto justify-center shadow-lg shadow-black/20 dark:shadow-white/20"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a 
                href="mailto:1amrmohamedd@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-white transition-colors w-full sm:w-auto justify-center shadow-lg"
              >
                <Mail className="w-5 h-5" />
                1amrmohamedd@gmail.com
              </a>
            </div>
          </motion.div>
        </Section>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-zinc-500 border-t border-zinc-200 dark:border-white/5 transition-colors duration-300">
          <p>© {new Date().getFullYear()} Amr Mohamed Taher. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
