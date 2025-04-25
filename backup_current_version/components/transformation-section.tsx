import { motion } from "framer-motion";
import BeforeAfterSlider from "./before-after-slider";
import { fadeUpVariants } from "@/lib/animation-utils";

const transformations = [
  {
    id: 1,
    title: "Kitchen Transformation",
    beforeAlt: "Disorganized Kitchen",
    afterAlt: "Organized & Clean",
  },
  {
    id: 2,
    title: "Living Room Refresh",
    beforeAlt: "Cluttered Space",
    afterAlt: "Clean & Modern",
  },
  {
    id: 3,
    title: "Home Office Setup",
    beforeAlt: "Messy Workspace",
    afterAlt: "Productive Environment",
  },
];

export default function TransformationSection() {
  return (
    <section id="transformations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-heading font-bold text-neutral-900">Transformations</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            See the remarkable difference our professionals can make in your home. Slide to compare before and after results.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {transformations.map((transformation) => (
            <BeforeAfterSlider
              key={transformation.id}
              title={transformation.title}
              beforeAlt={transformation.beforeAlt}
              afterAlt={transformation.afterAlt}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">Our Quality Promise</h3>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            Every service is backed by our satisfaction guarantee. If you're not completely satisfied, we'll make it right at no additional cost.
          </p>
        </motion.div>
      </div>
    </section>
  );
}