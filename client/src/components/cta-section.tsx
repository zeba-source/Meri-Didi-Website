import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground leading-tight">
            Ready to transform your home experience?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of busy professionals who have reclaimed their time and enjoy a pristine home.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              className="inline-flex items-center bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-4 rounded-md font-medium transition-colors shadow-lg hover:shadow-xl text-lg h-14"
            >
              <span>Book Your First Service</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="mt-4 text-sm text-primary-foreground/80">100% satisfaction guarantee. No contracts.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
