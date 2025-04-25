import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  TimerReset, 
  Tag, 
  Globe, 
  Clock, 
  ShieldCheck, 
  TrendingUp,
  Star 
} from "lucide-react";

const features = [
  {
    icon: <TimerReset className="text-secondary text-xl" />,
    title: "Fast Response Time",
    description: "Our professionals are available on short notice for all your home service needs."
  },
  {
    icon: <Tag className="text-secondary text-xl" />,
    title: "Flexible Booking",
    description: "Schedule services at times that work best for your busy lifestyle."
  },
  {
    icon: <Globe className="text-secondary text-xl" />,
    title: "Multi-Language Support",
    description: "Our professionals speak multiple languages to better serve diverse communities."
  },
  {
    icon: <Clock className="text-secondary text-xl" />,
    title: "Scheduled Services",
    description: "Set up regular appointments for ongoing maintenance of your home."
  },
  {
    icon: <ShieldCheck className="text-secondary text-xl" />,
    title: "Verified Professionals",
    description: "All service providers undergo thorough background checks and verification."
  },
  {
    icon: <TrendingUp className="text-secondary text-xl" />,
    title: "Quality Guarantees",
    description: "We stand behind our work with satisfaction guarantees on all services."
  }
];

const FeatureCard = ({ icon, title, description, index }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  index: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5,
            delay: index * 0.1
          }
        }
      }}
      initial="hidden"
      animate={controls}
      className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:shadow-md transition-shadow group"
    >
      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-2">{title}</h3>
      <p className="text-neutral-700">
        {description}
      </p>
    </motion.div>
  );
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary/20 rounded-full p-2">
              <Star className="text-secondary h-6 w-6" />
            </div>
          </div>
          <h2 className="text-3xl font-heading font-bold text-neutral-900">Premium Services For Your Home</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Quality services delivered by vetted professionals to keep your home running smoothly.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
