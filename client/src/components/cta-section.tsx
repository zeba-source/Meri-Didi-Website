import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Added for app store buttons (replace with actual imports)
const AppleIcon = () => <svg role="img" viewBox="0 0 24 24"></svg>; // Placeholder
const GooglePlayIcon = () => <svg role="img" viewBox="0 0 24 24"></svg>; // Placeholder


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
          <div className="mt-10 flex flex-col sm:flex-row gap-4"> {/* Changed to flexbox for app buttons */}
            <Button
              size="lg"
              className="bg-black hover:bg-neutral-900 text-white px-8 py-4 rounded-md font-medium transition-colors shadow-lg hover:shadow-xl text-lg h-14 flex items-center justify-center space-x-3"
            >
              <AppleIcon className="h-6 w-6" />
              <div>
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </Button>

            <Button
              size="lg"
              className="bg-black hover:bg-neutral-900 text-white px-8 py-4 rounded-md font-medium transition-colors shadow-lg hover:shadow-xl text-lg h-14 flex items-center justify-center space-x-3"
            >
              <GooglePlayIcon className="h-6 w-6" />
              <div>
                <div className="text-xs">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </Button>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80">100% satisfaction guarantee. No contracts.</p>
        </motion.div>
      </div>
    </section>
  );
}