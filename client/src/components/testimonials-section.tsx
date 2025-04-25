import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrustScoreMeter from "./trust-score-meter";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Working Mom",
    rating: 5,
    content: "The cleaning service has completely transformed my home life. I no longer stress about finding time to clean between work and family commitments. The professionals are thorough and trustworthy."
  },
  {
    id: 2,
    name: "David Chen",
    role: "Tech Executive",
    rating: 5,
    content: "As someone who works long hours, having a personal chef once a week has been life-changing. The meals are delicious and I'm eating healthier than ever. Well worth the investment!"
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Healthcare Professional",
    rating: 4.5,
    content: "I use the senior care services for my mother, and I couldn't be more satisfied. The caregivers are compassionate and professional. Mom looks forward to their visits."
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Remote Worker",
    rating: 5,
    content: "The handyman service saved me so much time and frustration. They handled multiple issues in one visit that would have taken me weeks to figure out on my own."
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "Business Owner",
    rating: 5,
    content: "I've tried several home service companies, but this one stands out for reliability and quality. The lawn care team is exceptional and my yard has never looked better."
  },
  {
    id: 6,
    name: "Robert Garcia",
    role: "Attorney",
    rating: 4.5,
    content: "The pest control service was efficient and effective. They identified the source of our problem quickly and used environmentally friendly solutions. Highly recommend."
  }
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-md h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
          <span className="text-primary-foreground font-bold">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-medium text-neutral-900">{testimonial.name}</h4>
          <p className="text-sm text-neutral-600">{testimonial.role}</p>
        </div>
      </div>
      <div className="mb-4 flex">
        {Array.from({ length: Math.floor(testimonial.rating) }).map((_, idx) => (
          <Star key={idx} className="text-yellow-400 fill-yellow-400 h-4 w-4" />
        ))}
        {testimonial.rating % 1 > 0 && (
          <svg
            className="text-yellow-400 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <p className="text-neutral-700 flex-grow">{testimonial.content}</p>
    </div>
  );
}

export default function TestimonialsSection() {
  const [visibleTestimonials, setVisibleTestimonials] = useState<typeof testimonials>([]);
  const [startIndex, setStartIndex] = useState(0);
  const testimonialsPerPage = 3;

  useEffect(() => {
    const endIndex = Math.min(startIndex + testimonialsPerPage, testimonials.length);
    setVisibleTestimonials(testimonials.slice(startIndex, endIndex));
  }, [startIndex]);

  const nextTestimonials = () => {
    setStartIndex((prevIndex) => 
      Math.min(prevIndex + testimonialsPerPage, testimonials.length - testimonialsPerPage)
    );
  };

  const prevTestimonials = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - testimonialsPerPage, 0));
  };

  return (
    <section id="testimonials" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-heading font-bold text-neutral-900">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Hear from people who have transformed their homes and lives with our services.
          </p>
        </motion.div>
        
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {visibleTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTestimonials}
              disabled={startIndex === 0}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTestimonials}
              disabled={startIndex + testimonialsPerPage >= testimonials.length}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <TrustScoreMeter score={4.8} reviews={1200} />
        </div>
      </div>
    </section>
  );
}
