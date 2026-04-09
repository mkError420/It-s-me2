import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8">
              Selected <span className="text-muted-foreground italic">Works</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A collection of projects I've worked on, ranging from web applications 
              to mobile solutions and experimental UI designs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-8 border border-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-full"
                    render={
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                      </a>
                    }
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20"
                    render={
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4 mr-2" /> Source Code
                      </a>
                    }
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full font-mono text-[10px] uppercase tracking-wider">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
