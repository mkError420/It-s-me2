import { motion } from "motion/react";
import { ArrowRight, Code, Layout, Smartphone, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const heroImage = new URL("../assects/image.2.png", import.meta.url).href;
const ecommerceImage = new URL("../assects/e-commerce.png", import.meta.url).href;

const services = [
  {
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using modern technologies.",
    icon: Code,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that provide great user experiences.",
    icon: Layout,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Mobile Solutions",
    description: "Developing cross-platform mobile applications for iOS and Android devices.",
    icon: Smartphone,
    color: "bg-green-500/10 text-green-500",
  },
];

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: ecommerceImage,
    link: "/projects",
  },
  {
    title: "AI Analytics Dashboard",
    category: "Data Science",
    image: "https://picsum.photos/seed/ai/800/600",
    link: "/projects",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-6 px-4 py-1 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
                Available for new opportunities
              </Badge>
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight leading-[0.9] mb-8">
                Building <span className="text-muted-foreground">Digital</span> Experiences That <span className="text-primary italic">Matter</span>.
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
                I’m a passionate web developer focused on building responsive, user-friendly, and scalable web applications. I enjoy turning ideas into real-world digital products using modern technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 h-14 text-lg"
                  render={
                    <Link to="/projects">
                      View My Work <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  }
                />
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-14 text-lg"
                  render={<Link to="/contact">Get in Touch</Link>}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden rounded-[2rem] bg-muted/70 shadow-2xl"
            >
              <img
                src={heroImage}
                alt="Developer working on a project"
                className="w-full h-full min-h-[360px] object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 blur-3xl pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full" />
          <div className="absolute bottom-1/4 right-1/2 w-64 h-64 bg-purple-500 rounded-full" />
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Expertise & Services</h2>
            <p className="text-lg text-muted-foreground">
              With experience in React, Next.js, Node.js, and WordPress, I create websites that are not only visually appealing but also optimized for performance and usability.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
              <Terminal className="w-4 h-4" />
              <span>npm install excellence</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-8">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", service.color)}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-16">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.32em] text-primary-foreground/60 mb-4">
                Featured Projects
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                Recent work designed to drive impact.
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl">
                Explore two standout projects that showcase modern interfaces, performance-first engineering, and polished user experiences.
              </p>
            </div>
            <Button
              variant="secondary"
              className="rounded-full"
              render={<Link to="/projects">View All Projects</Link>}
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group overflow-hidden rounded-[2rem] border border-primary/20 bg-slate-950/10 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={featuredProjects[0].image}
                  alt={featuredProjects[0].title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <Badge variant="outline" className="mb-4 text-white border-white/20">
                    {featuredProjects[0].category}
                  </Badge>
                  <h3 className="text-4xl font-display font-bold text-white mb-4">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="max-w-xl text-sm text-white/80 mb-6">
                    A complete, scalable e-commerce experience with a polished storefront and streamlined checkout flow.
                  </p>
                  <Button variant="secondary" className="rounded-full">
                    <Link to={featuredProjects[0].link}>View Project</Link>
                  </Button>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group overflow-hidden rounded-[2rem] border border-primary/20 bg-slate-950/10 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.85)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={featuredProjects[1].image}
                    alt={featuredProjects[1].title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <Badge variant="outline" className="mb-3 text-white border-white/20">
                      {featuredProjects[1].category}
                    </Badge>
                    <h3 className="text-3xl font-display font-bold text-white mb-3">
                      {featuredProjects[1].title}
                    </h3>
                    <p className="text-sm text-white/75">
                      A data-driven dashboard built to help teams quickly discover insights and act with confidence.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-[2rem] border border-border bg-muted p-8"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground/70 mb-4">Project highlights</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Design systems</h4>
                    <p className="text-muted-foreground">Reusable UI, consistent branding, and accessible visual patterns across product experiences.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Performance goals</h4>
                    <p className="text-muted-foreground">Fast-loading pages and intuitive interactions for every screen size.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">User-centered tools</h4>
                    <p className="text-muted-foreground">Projects built with user adoption, clarity, and conversion in mind.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Process Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">How I Work</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I focus on delivering polished products with a clear process, strong communication, and deep technical expertise.
            </p>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-border bg-muted p-6">
                <h3 className="text-xl font-semibold mb-2">Clear communication</h3>
                <p className="text-muted-foreground">I keep every project aligned with your goals through transparent updates and collaboration.</p>
              </div>
              <div className="rounded-3xl border border-border bg-muted p-6">
                <h3 className="text-xl font-semibold mb-2">Fast delivery</h3>
                <p className="text-muted-foreground">I build efficient solutions that move quickly from idea to launch without sacrificing quality.</p>
              </div>
              <div className="rounded-3xl border border-border bg-muted p-6">
                <h3 className="text-xl font-semibold mb-2">Design-led development</h3>
                <p className="text-muted-foreground">I blend strong visual design with clean code to create delightful digital experiences.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-primary/5 p-8">
            <div className="grid gap-6">
              <div className="rounded-3xl bg-primary text-primary-foreground p-6 shadow-lg">
                <p className="text-sm uppercase tracking-[0.24em] text-primary-foreground/70 mb-2">Skills</p>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm">React</span>
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm">Next.js</span>
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm">Node.js</span>
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm">WordPress</span>
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm">UI/UX</span>
                </div>
              </div>
              <div className="rounded-3xl border border-border bg-muted p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground/70 mb-2">Project focus</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Responsive websites</li>
                  <li>Design systems</li>
                  <li>Performance optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-muted rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 italic">
              Ready to start your next project?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              I'm always open to discussing new projects, creative ideas or 
              opportunities to be part of your visions.
            </p>
            <Button
              size="lg"
              className="rounded-full px-12 h-16 text-xl"
              render={<Link to="/contact">Let's Talk</Link>}
            />
          </div>
          
          {/* Decorative circles */}
          <div className="absolute -top-24 -left-24 w-64 h-64 border border-primary/10 rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-primary/10 rounded-full" />
        </div>
      </section>
    </div>
  );
}
