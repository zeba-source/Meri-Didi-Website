import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { bounceVariants, fadeUpVariants } from "@/lib/animation-utils";

const serviceProfessionals = [
  {
    id: 1,
    name: "Chef Rajesh",
    title: "Professional Chef",
    avatar: "👨‍🍳",
    color: "bg-amber-100",
    accent: "bg-amber-400",
    rating: 4.9,
    reviews: 328,
    achievements: "Trained at 5-star hotels",
    greeting: "Hi! I can prepare delicious meals for your family."
  },
  {
    id: 2,
    name: "Meena",
    title: "Senior Maid",
    avatar: "👩‍🔧",
    color: "bg-blue-100",
    accent: "bg-blue-400",
    rating: 4.8,
    reviews: 412,
    achievements: "6+ years experience",
    greeting: "Hello! I'll keep your home spotlessly clean."
  },
  {
    id: 3,
    name: "Kumar",
    title: "Expert Sweeper",
    avatar: "🧹",
    color: "bg-green-100",
    accent: "bg-green-400",
    rating: 4.7,
    reviews: 286,
    achievements: "Eco-friendly cleaning expert",
    greeting: "Namaste! I specialize in thorough floor cleaning."
  },
  {
    id: 4,
    name: "Sunita",
    title: "Caregiver",
    avatar: "👩‍⚕️",
    color: "bg-purple-100",
    accent: "bg-purple-400",
    rating: 4.9,
    reviews: 156,
    achievements: "Certified in elderly care",
    greeting: "Hi there! I provide compassionate care for your loved ones."
  },
  {
    id: 5,
    name: "Ravi",
    title: "Handyman",
    avatar: "🔧",
    color: "bg-orange-100",
    accent: "bg-orange-400",
    rating: 4.8,
    reviews: 203,
    achievements: "Fixes anything in your home",
    greeting: "Hello! I can fix all your household issues."
  },
  {
    id: 6,
    name: "Priya",
    title: "Nanny",
    avatar: "👩‍👧",
    color: "bg-pink-100",
    accent: "bg-pink-400",
    rating: 5.0,
    reviews: 178,
    achievements: "Child development specialist",
    greeting: "Namaste! I'll take excellent care of your children."
  },
];

// Worker of the Week Card
function WorkerOfTheWeek() {
  const featuredWorker = serviceProfessionals[0]; // Using the first worker as featured

  return (
    <motion.div 
      className="relative rounded-xl overflow-hidden shadow-lg border border-neutral-200 bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
        <motion.div
          variants={bounceVariants}
          initial="initial"
          animate="animate"
          className="mr-1"
        >
          <Star className="w-4 h-4 text-yellow-900 fill-yellow-900" />
        </motion.div>
        Worker of the Week
      </div>
      
      <div className="p-6">
        <div className="flex flex-col items-center">
          <div className={`w-24 h-24 rounded-full ${featuredWorker.color} flex items-center justify-center text-4xl mb-4`}>
            {featuredWorker.avatar}
          </div>
          
          <h3 className="text-xl font-bold text-neutral-900">{featuredWorker.name}</h3>
          <p className="text-neutral-600">{featuredWorker.title}</p>
          
          <div className="mt-3 flex items-center">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-neutral-900 font-semibold ml-1">{featuredWorker.rating}</span>
            <span className="text-neutral-500 ml-1">({featuredWorker.reviews} reviews)</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-neutral-200">
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium text-neutral-500">ACHIEVEMENT</h4>
              <p className="text-neutral-800">{featuredWorker.achievements}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-neutral-500">STATS</h4>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-neutral-100 p-2 rounded">
                  <p className="text-xs text-neutral-500">Homes Served</p>
                  <p className="text-neutral-900 font-semibold">56</p>
                </div>
                <div className="bg-neutral-100 p-2 rounded">
                  <p className="text-xs text-neutral-500">On-time</p>
                  <p className="text-neutral-900 font-semibold">98%</p>
                </div>
                <div className="bg-neutral-100 p-2 rounded">
                  <p className="text-xs text-neutral-500">Satisfaction</p>
                  <p className="text-neutral-900 font-semibold">99%</p>
                </div>
                <div className="bg-neutral-100 p-2 rounded">
                  <p className="text-xs text-neutral-500">Experience</p>
                  <p className="text-neutral-900 font-semibold">6 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Professional Card component
function ProfessionalCard({ professional, isActive }: { professional: typeof serviceProfessionals[0], isActive: boolean }) {
  return (
    <motion.div 
      className={`p-6 rounded-xl shadow-md border ${isActive ? 'border-primary' : 'border-neutral-200'} bg-white`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <div className={`w-16 h-16 ${professional.color} rounded-full flex items-center justify-center text-3xl mr-4`}>
          {professional.avatar}
        </div>
        <div>
          <h3 className="text-lg font-bold text-neutral-900">{professional.name}</h3>
          <p className="text-neutral-600 text-sm">{professional.title}</p>
          <div className="flex items-center mt-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm text-neutral-700 ml-1">{professional.rating} ({professional.reviews})</span>
          </div>
        </div>
      </div>
      
      {/* Speech bubble with greeting */}
      <div className="relative bg-neutral-100 p-3 rounded-lg mt-2">
        <div className="absolute top-0 left-4 transform -translate-y-2 rotate-45 w-2 h-2 bg-neutral-100"></div>
        <p className="text-neutral-800 text-sm">"{professional.greeting}"</p>
      </div>
      
      {isActive && (
        <motion.div 
          className={`w-full h-1 ${professional.accent} rounded-full mt-4`}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      )}
    </motion.div>
  );
}

export default function AnimatedServiceProfessionals() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Handle autoplay
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % serviceProfessionals.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [autoplay]);
  
  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % serviceProfessionals.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + serviceProfessionals.length) % serviceProfessionals.length);
  };
  
  // Calculate visible professionals (current plus 2 on each side)
  const visibleProfessionals = serviceProfessionals
    .slice(0, serviceProfessionals.length)
    .map((_, i) => serviceProfessionals[(currentIndex + i) % serviceProfessionals.length])
    .slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-heading font-bold text-neutral-900">Meet Our Professionals</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Our verified and highly trained professionals are ready to provide exceptional service.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <WorkerOfTheWeek />
          
          <div className="md:col-span-2">
            <motion.div
              className="bg-neutral-50 p-6 rounded-xl shadow-md border border-neutral-200"
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-neutral-900 mb-6">Hygiene Protocol Explainer</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Hand Washing</h4>
                    <p className="text-neutral-600 text-sm">20-second hand wash before service and at regular intervals</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Protective Equipment</h4>
                    <p className="text-neutral-600 text-sm">Fresh gloves, masks, and shoe covers for every service</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Sanitization</h4>
                    <p className="text-neutral-600 text-sm">Equipment sanitized before and after every service</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Health Monitoring</h4>
                    <p className="text-neutral-600 text-sm">Regular health check-ups and daily temperature checks</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Professionals Carousel */}
        <div 
          className="relative mt-12 py-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Button 
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <div className="relative overflow-hidden px-4">
            <div className="flex justify-center">
              <AnimatePresence mode="wait">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {visibleProfessionals.map((professional, idx) => (
                    <ProfessionalCard
                      key={`${professional.id}-${idx}`}
                      professional={professional}
                      isActive={idx === 0}
                    />
                  ))}
                </div>
              </AnimatePresence>
            </div>
          </div>
          
          <Button 
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {serviceProfessionals.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? "bg-primary" : "bg-neutral-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-neutral-800 font-medium text-lg">
            "We're here when you need us."
          </p>
          <p className="text-neutral-600">
            24/7 Support: <span className="font-semibold">1800-MERI-DIDI</span> | <span className="font-semibold">support@merididi.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}