import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <section className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-[0.36em] text-muted-foreground/70 mb-4">Projects</p>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
              Work that balances design, performance, and real business outcomes.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              These are the most recent experiences I’ve shipped: from e-commerce platforms and SaaS dashboards to enterprise tools and portfolio websites.
            </p>
          </motion.div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3 mb-20">
          <div className="rounded-[2rem] border border-border bg-muted p-8 text-center">
            <p className="text-5xl font-display font-bold mb-3">{projects.length}+</p>
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground/70">Projects Completed</p>
          </div>
          <div className="rounded-[2rem] border border-border bg-muted p-8 text-center">
            <p className="text-5xl font-display font-bold mb-3">{new Set(projects.flatMap((project) => project.tags)).size}</p>
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground/70">Technology Badges</p>
          </div>
          <div className="rounded-[2rem] border border-border bg-muted p-8 text-center">
            <p className="text-5xl font-display font-bold mb-3">4</p>
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground/70">Industries Covered</p>
          </div>
        </section>

        <section className="grid gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="overflow-hidden rounded-[2rem] border border-border bg-muted shadow-[0_30px_80px_-45px_rgba(15,23,42,0.8)] md:grid md:grid-cols-[1fr_1.5fr]"
            >
              <div className="relative min-h-[320px] overflow-hidden bg-slate-950/10 md:min-h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">Project {index + 1}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="rounded-full font-mono text-[10px] uppercase tracking-wider">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-5">{project.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">{project.description}</p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Button
                    variant="secondary"
                    className="rounded-full"
                    render={
                      <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    }
                  />
                  <Button
                    variant="outline"
                    className="rounded-full border-white/20 text-white bg-white/5 hover:bg-white/10"
                    render={
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                        <Github className="w-4 h-4" /> Source Code
                      </a>
                    }
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        <section className="mt-24 rounded-[2rem] border border-border bg-primary/5 p-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[1.75rem] bg-muted p-8">
              <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground/70 mb-4">Process</p>
              <h3 className="text-2xl font-display font-bold mb-3">Design to delivery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each project follows a clear process: discovery, design, development, and launch. That ensures every product is polished, predictable, and ready to scale.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-muted p-8">
              <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground/70 mb-4">Value</p>
              <h3 className="text-2xl font-display font-bold mb-3">Impact-driven outcomes</h3>
              <p className="text-muted-foreground leading-relaxed">
                I build for usability, performance, and business value. That means stronger conversion, faster onboarding, and better long-term maintainability.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-muted p-8">
              <p className="text-sm uppercase tracking-[0.32em] text-muted-foreground/70 mb-4">Support</p>
              <h3 className="text-2xl font-display font-bold mb-3">End-to-end delivery</h3>
              <p className="text-muted-foreground leading-relaxed">
                From wireframes to launch and beyond, I help clients move quickly with a reliable, collaborative workflow that eliminates guesswork.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
