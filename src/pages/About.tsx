import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Briefcase, GraduationCap, Heart, User } from "lucide-react";
import React from "react";

const experience = [
  {
    company: "Tech Innovators",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    description: "Leading the development of core product features, mentoring junior developers, and optimizing application performance.",
  },
  {
    company: "Creative Digital Agency",
    role: "Frontend Developer",
    period: "2020 - 2022",
    description: "Developed responsive and interactive user interfaces for a diverse range of clients using React and modern CSS frameworks.",
  },
  {
    company: "StartUp Hub",
    role: "Junior Web Developer",
    period: "2018 - 2020",
    description: "Assisted in the development of web applications, bug fixing, and implementing UI designs.",
  },
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Vercel"] },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1 rounded-full text-sm font-medium">
              <User className="w-4 h-4 mr-2" />
              About Me
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">
              I design and build <span className="text-primary italic">digital</span> products.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a passionate developer with over 6 years of experience in creating 
              meaningful digital experiences. My approach combines technical 
              excellence with a deep understanding of user needs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new hiking trails, 
              reading about design philosophy, or experimenting with new cooking recipes.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden border border-border shadow-2xl"
          >
            <img
              src="https://picsum.photos/seed/person/800/800"
              alt="Profile"
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-background/80 backdrop-blur-md p-6 rounded-2xl border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="font-bold">Based in</p>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-12">
              <Briefcase className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-display font-bold">Work Experience</h2>
            </div>
            <div className="space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l border-border group"
                >
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-border group-hover:bg-primary transition-colors" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3 className="text-2xl font-display font-bold">{item.role}</h3>
                    <Badge variant="outline" className="w-fit">{item.period}</Badge>
                  </div>
                  <p className="text-primary font-medium mb-4">{item.company}</p>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-display font-bold">Education</h2>
            </div>
            <div className="space-y-8">
              <div className="p-6 rounded-2xl border border-border bg-muted/30">
                <p className="text-sm text-muted-foreground mb-2">2014 - 2018</p>
                <h3 className="font-display font-bold text-xl mb-1">B.S. Computer Science</h3>
                <p className="text-muted-foreground">Stanford University</p>
              </div>
              <div className="p-6 rounded-2xl border border-border bg-muted/30">
                <p className="text-sm text-muted-foreground mb-2">2018</p>
                <h3 className="font-display font-bold text-xl mb-1">UI/UX Design Certificate</h3>
                <p className="text-muted-foreground">Design Academy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <section>
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Technical Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-border bg-background hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-full px-4 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
