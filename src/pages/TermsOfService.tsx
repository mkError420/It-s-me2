import { motion } from "motion/react";

export default function TermsOfService() {
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
          <h1 className="text-5xl font-display font-bold mb-8">Terms of Service</h1>
          <p className="text-lg text-muted-foreground mb-6">
            These terms explain what you can expect when using this website and the services provided.
          </p>
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Acceptance of Terms</h2>
              <p>
                By using this site, you agree to these terms, including any updates. If you do not agree, please discontinue use.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Service Scope</h2>
              <p>
                This website is a portfolio and contact point for freelance and development services. Any service engagement is subject to separate agreement.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
              <p>
                The website owner is not responsible for indirect damages resulting from use of the site or reliance on the information provided.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
