import { motion } from "framer-motion";
import { Shield, CheckCircle, BadgeCheck, Lock, UserCheck, Star } from "lucide-react";
import { fadeUpVariants, staggerContainer } from "@/lib/animation-utils";

const securitySteps = [
  {
    title: "Database Check",
    description: "Worker information is cross-referenced with national databases",
    icon: Shield,
  },
  {
    title: "ID Verification",
    description: "Government-issued IDs are authenticated and validated",
    icon: BadgeCheck,
  },
  {
    title: "Face Match",
    description: "Biometric verification ensures identity authenticity",
    icon: UserCheck,
  },
  {
    title: "Address Verification",
    description: "Physical address verification through on-site visits",
    icon: CheckCircle,
  },
  {
    title: "Background Check",
    description: "Complete background verification by authorized agencies",
    icon: Lock,
  },
  {
    title: "Final Approval",
    description: "Only approved workers are allowed to join our platform",
    icon: Star,
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Your Safety Is Our Top Priority
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            We follow a rigorous 6-step verification process to ensure all workers on our platform are trustworthy and reliable.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Flow line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 transform -translate-y-1/2 hidden md:block"></div>
          
          {/* Security steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {securitySteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100 relative flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center absolute -top-3 -right-3 border-2 border-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-20 bg-primary/5 rounded-2xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-3">Our Security Promise</h3>
              <p className="text-neutral-700">
                Every worker on our platform is police-verified, thoroughly background-checked, and continuously monitored to ensure the highest standards of service and safety.
              </p>
            </div>
            <div className="flex-shrink-0 bg-white p-5 rounded-xl shadow-md flex items-center justify-center">
              <Shield className="w-12 h-12 text-primary mr-4" />
              <div>
                <p className="text-sm text-neutral-500">Verified Workers</p>
                <p className="text-2xl font-bold">100%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}