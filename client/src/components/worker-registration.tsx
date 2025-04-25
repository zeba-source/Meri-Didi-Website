import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { fadeUpVariants, staggerContainer } from "@/lib/animation-utils";

// Form validation schema
const workerFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Please enter your full address" }),
  serviceType: z.string().min(1, { message: "Please select a service type" }),
  experience: z.string().min(1, { message: "Please select your experience level" }),
  idProof: z.string().min(1, { message: "Please select ID proof type" }),
  additionalInfo: z.string().optional(),
});

type WorkerFormData = z.infer<typeof workerFormSchema>;

export default function WorkerRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<WorkerFormData>({
    resolver: zodResolver(workerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      serviceType: "",
      experience: "",
      idProof: "",
      additionalInfo: "",
    },
  });

  const onSubmit = async (data: WorkerFormData) => {
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send this data to your server
      console.log("Worker registration data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Registration successful",
        description: "We've received your application. Our team will contact you soon!",
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting worker registration:", error);
      toast({
        title: "Something went wrong",
        description: "Your registration couldn't be submitted. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceTypes = [
    "Home Cleaning",
    "Cooking",
    "Senior Care",
    "Childcare",
    "Gardening",
    "Home Repair",
    "Other",
  ];

  const experienceLevels = [
    "Less than 1 year",
    "1-3 years",
    "3-5 years",
    "5-10 years",
    "10+ years",
  ];

  const idProofTypes = [
    "Aadhar Card",
    "Voter ID",
    "Passport",
    "Driving License",
    "PAN Card",
  ];

  if (submitted) {
    return (
      <motion.div 
        className="text-center py-20 max-w-md mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-4">Registration Successful!</h3>
        <p className="text-neutral-600 mb-6">
          Thank you for your interest in joining Meri Didi! Our team will review your application and contact you within 48 hours.
        </p>
        <div className="border border-neutral-200 rounded-lg p-6 bg-neutral-50 mb-6">
          <h4 className="font-semibold text-neutral-800 mb-2">Next Steps:</h4>
          <ol className="text-left text-neutral-700 space-y-2">
            <li className="flex items-start">
              <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">1</span>
              <span>Document verification (We'll contact you for scanned copies)</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">2</span>
              <span>Background verification check</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">3</span>
              <span>Skills assessment and training</span>
            </li>
            <li className="flex items-start">
              <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">4</span>
              <span>Onboarding and first assignment</span>
            </li>
          </ol>
        </div>
        <Button 
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="mr-2"
        >
          Submit Another Application
        </Button>
      </motion.div>
    );
  }

  return (
    <section id="worker-registration" className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
        >
          <h2 className="text-3xl font-heading font-bold text-neutral-900">Join Our Team</h2>
          <p className="mt-4 text-lg text-neutral-700 max-w-2xl mx-auto">
            Are you skilled and looking for flexible work opportunities? Register with Meri Didi to become a certified service professional.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-white shadow-xl rounded-xl border border-neutral-200 overflow-hidden"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={fadeUpVariants}>
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={fadeUpVariants}>
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={fadeUpVariants}>
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={fadeUpVariants}>
                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Type</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select service type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {serviceTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={fadeUpVariants}>
                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Experience Level</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select experience level" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {experienceLevels.map((level) => (
                                  <SelectItem key={level} value={level}>
                                    {level}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>

                    <motion.div variants={fadeUpVariants}>
                      <FormField
                        control={form.control}
                        name="idProof"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ID Proof Type</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select ID proof type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {idProofTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={fadeUpVariants}>
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Address</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter your complete address"
                              className="min-h-20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={fadeUpVariants}>
                    <FormField
                      control={form.control}
                      name="additionalInfo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Information (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us more about your skills and experience"
                              className="min-h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div variants={fadeUpVariants} className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full py-6" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </div>
            
            <div className="p-6 bg-neutral-50 border-t border-neutral-200">
              <h4 className="font-semibold text-neutral-800 mb-2">What happens after registration?</h4>
              <ol className="text-neutral-700 space-y-2">
                <li className="flex items-center">
                  <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">1</span>
                  <span>Document verification and background check</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">2</span>
                  <span>Skills assessment and professional training</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">3</span>
                  <span>Onboarding and uniform/equipment provision</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">4</span>
                  <span>First assignment with mentorship</span>
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}