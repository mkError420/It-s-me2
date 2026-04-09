import { motion } from "motion/react";

export default function PrivacyPolicy() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="min-h-screen"
    >
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-display font-bold mb-8">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Your privacy is important to me. This policy explains what data I collect, how it is used, and how I protect it.
          </p>
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Information Collection</h2>
              <p>
                I only collect information you provide directly, such as your name, email address, and project details submitted through the contact form.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Use of Information</h2>
              <p>
                Submitted information is used solely to respond to inquiries, provide services, and improve the website experience.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
              <p>
                I take reasonable steps to protect your information, but no online transmission is completely secure. Please use discretion when sending sensitive data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
