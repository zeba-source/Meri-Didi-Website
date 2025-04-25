import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, MessageSquare, DollarSign, Info } from "lucide-react";
import { fadeUpVariants, staggerContainer, pulseVariants } from "@/lib/animation-utils";

type TrustFeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  animation?: "glow" | "uniform" | null;
}

function TrustFeature({ icon, title, description, animation }: TrustFeatureProps) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-md border border-neutral-100 relative overflow-hidden"
      variants={fadeUpVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {/* Animated background effect */}
      {animation === "glow" && (
        <motion.div 
          className="absolute -right-6 -top-6 w-20 h-20 bg-yellow-300 rounded-full opacity-20 z-0"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      )}
      
      {animation === "uniform" && (
        <motion.div 
          className="absolute -left-2 -bottom-2 w-16 h-16 bg-blue-300 rounded-full opacity-10 z-0"
          animate={{ 
            y: [0, -5, 0],
            x: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      )}
      
      <div className="relative z-10">
        <div className="mb-4 text-primary">
          <motion.div
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center"
          >
            {icon}
          </motion.div>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-neutral-900">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default function TrustBuildingSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold text-neutral-900">Why Choose Meri Didi</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Our commitment to quality, security, and reliability makes us the preferred choice for home services.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <TrustFeature 
            icon={<Shield className="h-8 w-8" />}
            title="Police-verified Staff"
            description="Every worker undergoes a comprehensive police verification process to ensure your safety."
            animation="glow"
          />
          
          <TrustFeature 
            icon={<Award className="h-8 w-8" />}
            title="Trained Professionals"
            description="Our staff receives extensive training in hygiene protocols, service standards, and modern techniques."
            animation="uniform"
          />
          
          <TrustFeature 
            icon={<CheckCircle className="h-8 w-8" />}
            title="100% Service Guarantee"
            description="Not satisfied with the service? We'll send a professional back to address any concerns at no extra cost."
          />
          
          <TrustFeature 
            icon={<MessageSquare className="h-8 w-8" />}
            title="Daily Feedback System"
            description="We continuously improve through our rigorous feedback collection after every service provided."
          />
          
          <TrustFeature 
            icon={<DollarSign className="h-8 w-8" />}
            title="Transparent Pricing"
            description="Clear, upfront pricing with no hidden fees or unexpected charges. Pay only for what you need."
          />
          
          <TrustFeature 
            icon={<Info className="h-8 w-8" />}
            title="24/7 Customer Support"
            description="Have a question or concern? Our dedicated support team is available around the clock to assist you."
          />
        </motion.div>
        
        {/* Security Verification Process */}
        <motion.div 
          className="mt-24 max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="p-6 bg-primary text-white">
            <h3 className="text-xl font-semibold">Our Rigorous Security Verification Process</h3>
            <p className="mt-2 text-primary-foreground/90">
              Every professional must pass our 4-step verification process before joining our team
            </p>
          </div>
          
          <div className="p-6">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-0 bottom-0 left-12 w-1 bg-neutral-200 z-0"></div>
              
              <div className="space-y-8 relative z-10">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mr-4">1</div>
                  <div>
                    <h4 className="text-lg font-medium text-neutral-900">ID Verification</h4>
                    <p className="text-neutral-600 mt-1">Multiple government-issued IDs cross-checked for authenticity</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mr-4">2</div>
                  <div>
                    <h4 className="text-lg font-medium text-neutral-900">Facial Recognition</h4>
                    <p className="text-neutral-600 mt-1">Advanced biometric scanning ensures the person matches their documentation</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mr-4">3</div>
                  <div>
                    <h4 className="text-lg font-medium text-neutral-900">Address Verification</h4>
                    <p className="text-neutral-600 mt-1">Physical verification of residence through on-site visits by our team</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="bg-primary text-white rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0 mr-4">4</div>
                  <div>
                    <h4 className="text-lg font-medium text-neutral-900">Final Approval</h4>
                    <p className="text-neutral-600 mt-1">Comprehensive background check before authorization to work</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Worker's Kit Section */}
        <motion.div 
          className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Professional Worker's Kit</h3>
              <p className="text-neutral-700 mb-6">
                Every Meri Didi professional comes equipped with high-quality, standardized tools and eco-friendly supplies.
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-neutral-800">Professional-grade cleaning equipment</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-neutral-800">Eco-friendly, non-toxic cleaning solutions</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-neutral-800">Protective gear and safety equipment</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-neutral-800">Branded uniform with identification</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-neutral-800">Digital service checklist and quality control tools</span>
                </motion.div>
              </div>
            </div>
            
            <div className="bg-neutral-100 p-8 flex items-center justify-center">
              <div className="relative">
                {/* Animated tool kit items */}
                <div className="bg-white rounded-lg shadow-md p-6 w-80 h-80 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {/* Cleaning Mop */}
                    <motion.div 
                      className="absolute top-0 left-0 w-16 h-16 bg-blue-100 rounded-md flex items-center justify-center shadow-sm"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                      </svg>
                    </motion.div>
                    
                    {/* Spray Bottle */}
                    <motion.div 
                      className="absolute top-0 right-0 w-16 h-16 bg-green-100 rounded-md flex items-center justify-center shadow-sm"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                      </svg>
                    </motion.div>
                    
                    {/* Gloves */}
                    <motion.div 
                      className="absolute bottom-0 left-0 w-16 h-16 bg-yellow-100 rounded-md flex items-center justify-center shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.0, duration: 0.5 }}
                    >
                      <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
                      </svg>
                    </motion.div>
                    
                    {/* Duster */}
                    <motion.div 
                      className="absolute bottom-0 right-0 w-16 h-16 bg-purple-100 rounded-md flex items-center justify-center shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                      </svg>
                    </motion.div>
                    
                    {/* Center uniform */}
                    <motion.div 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center shadow-md"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.4, duration: 0.7 }}
                    >
                      <div className="text-primary font-bold text-center">
                        <span className="block text-xl">Meri</span>
                        <span className="block text-xl">Didi</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}