import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("_captcha", "false");
    formData.append("_subject", "Portfolio Contact Form Message");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mk.rabbani.cse@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        console.error("Form submission error", response.statusText);
      }
    } catch (error) {
      console.error("Form submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Let's <span className="text-muted-foreground italic">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have a project in mind or just want to say hi? I'd love to hear from you. 
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-muted/30 rounded-[2rem] p-12 text-center border border-border"
              >
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-display font-bold mb-4">Message Sent!</h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Thank you for reaching out. I've received your message and will get 
                  back to you within 24-48 hours.
                </p>
                <Button variant="outline" className="rounded-full" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Name</label>
                    <Input 
                      name="name"
                      placeholder="Enter your nickname" 
                      required 
                      className="rounded-2xl h-14 bg-muted/30 border-border focus:bg-background transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Phone Number</label>
                    <Input 
                      name="phone"
                      type="tel" 
                      placeholder="Enter your phone number" 
                      required 
                      className="rounded-2xl h-14 bg-muted/30 border-border focus:bg-background transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Message</label>
                  <Textarea 
                    name="message"
                    placeholder="Tell me about your project..." 
                    required 
                    className="rounded-2xl min-h-[200px] bg-muted/30 border-border focus:bg-background transition-colors p-6"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full md:w-auto rounded-full px-12 h-16 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <Card className="border-border bg-muted/30 rounded-[2rem] overflow-hidden">
              <CardContent className="p-10 space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2">Email</h3>
                    <p className="text-muted-foreground">mk.rabbani.cse@gmail.com</p>
                    <p className="text-muted-foreground">nobinislam420@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2">Phone</h3>
                    <p className="text-muted-foreground">+880 1854-718767</p>
                    <p className="text-muted-foreground">24/7 Available</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-2">Location</h3>
                    <p className="text-muted-foreground">Spalashbari, Gaibandha</p>
                    <p className="text-muted-foreground">Bangladesh</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-10 rounded-[2rem] border border-border bg-primary text-primary-foreground">
              <h3 className="font-display font-bold text-2xl mb-4 italic">Social Channels</h3>
              <p className="text-primary-foreground/70 mb-8">
                Follow me on social media for more updates and insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full"
                  render={
                    <a href="https://www.linkedin.com/in/mk-rabbani-81343024b/" target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                  }
                />
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full"
                  render={
                    <a href="https://github.com/mkError420" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  }
                />
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full"
                  render={
                    <a href="https://www.facebook.com/share/18FjXeSp8u/" target="_blank" rel="noreferrer">
                      facebook
                    </a>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
