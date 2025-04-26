import { motion } from "framer-motion";
import { AppleIcon, Smartphone, QrCode } from "lucide-react";
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
          <div className="mt-10 p-6 bg-neutral-700/20 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-white font-bold text-xl mb-3">Download Our Mobile App</h3>
                <p className="text-primary-foreground/80 mb-4">Access our services on-the-go. Book, track, and manage your home services from anywhere.</p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href="#" 
                    className="bg-black hover:bg-neutral-900 text-white px-4 py-3 rounded-lg flex items-center justify-center sm:justify-start space-x-3 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AppleIcon size={24} />
                    <div>
                      <div className="text-xs">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </motion.a>
                  
                  <motion.a 
                    href="#" 
                    className="bg-black hover:bg-neutral-900 text-white px-4 py-3 rounded-lg flex items-center justify-center sm:justify-start space-x-3 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Smartphone size={24} />
                    <div>
                      <div className="text-xs">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </motion.a>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-lg w-40 h-40 flex items-center justify-center">
                  <div className="text-center">
                    <QrCode size={100} className="mx-auto mb-2 text-neutral-800" />
                    <p className="text-xs text-neutral-500">Scan to download</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80">100% satisfaction guarantee. No contracts.</p>
        </motion.div>
      </div>
    </section>
  );
}