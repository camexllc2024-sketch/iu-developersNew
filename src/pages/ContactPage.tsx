import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is required"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const contactDetails = [
  { icon: MapPin, title: "Headquarters", detail: "Kibagabaga, Gasabo", sub: "Kigali, Rwanda" },
  { icon: Phone, title: "Direct Lines", detail: "+250 783 247 298", sub: "Mon – Fri: 8:00 – 18:00" },
  { icon: Mail, title: "Email Support", detail: "info@iudevelopers.com", sub: "We reply within 24h" },
  { icon: Clock, title: "Working Hours", detail: "Monday – Friday", sub: "08:00 – 18:00 CAT" },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 6000);
  };

  const inputClass = "w-full h-12 px-4 rounded-md border border-[#1B3558]/20 bg-white text-[#1B3558] placeholder:text-[#1B3558]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40 focus:border-[#C9A84C] transition-all duration-200 text-sm";

  return (
    <main className="w-full bg-white overflow-x-hidden">
      <Navbar forceScrolled />

      <PageHero
        tag="Get In Touch"
        title="Let's Build"
        highlight="Something Extraordinary"
        subtitle="Tell us about your vision and our expert consultants will craft a tailored proposal within 48 hours — no obligation, completely free."
        breadcrumb="Contact"
      />

      {/* Contact Details */}
      <section className="py-16 bg-[#F4F6FA] border-b border-[#1B3558]/08">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDetails.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white p-6 rounded-2xl border border-[#1B3558]/08 flex items-start gap-4 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-full bg-[#1B3558]/06 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C] transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-[#C9A84C] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-1">{item.title}</div>
                  <div className="font-semibold text-[#1B3558] text-sm">{item.detail}</div>
                  <div className="text-[#1B3558]/50 text-xs mt-0.5">{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* Left Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#C9A84C] font-bold tracking-widest uppercase text-sm mb-3 block">Why Work With Us</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1B3558] mb-6">Your Project Deserves the Best</h2>
              <p className="text-[#1B3558]/65 leading-relaxed mb-8">
                We're Rwanda's premier development firm, bringing international quality standards to every project. Whether residential or commercial, we deliver on time, within budget, and beyond expectations.
              </p>
              <ul className="space-y-4">
                {[
                  "Free initial consultation & site visit",
                  "Detailed proposal within 48 hours",
                  "Transparent pricing — no hidden fees",
                  "Dedicated project manager from day one",
                  "10+ years of delivery excellence",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#1B3558]/75">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[#F8F9FC] p-8 md:p-10 rounded-3xl border border-[#1B3558]/08 shadow-lg relative">
                {isSuccess && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-3xl z-10 p-8 text-center">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-3xl font-display font-bold text-[#1B3558] mb-4">Request Received!</h3>
                    <p className="text-[#1B3558]/65 text-lg max-w-md">
                      Thank you for reaching out. One of our lead consultants will contact you within 24 hours.
                    </p>
                  </div>
                )}

                <h3 className="text-2xl font-display font-bold text-[#1B3558] mb-8">Send Us Your Project Brief</h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-semibold text-[#1B3558]/70 mb-1.5 block">Full Name *</label>
                      <input placeholder="John Doe" {...register("name")} className={`${inputClass} ${errors.name ? "border-red-400" : ""}`} />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#1B3558]/70 mb-1.5 block">Email Address *</label>
                      <input placeholder="john@example.com" type="email" {...register("email")} className={`${inputClass} ${errors.email ? "border-red-400" : ""}`} />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-semibold text-[#1B3558]/70 mb-1.5 block">Phone Number *</label>
                      <input placeholder="+250 788..." {...register("phone")} className={`${inputClass} ${errors.phone ? "border-red-400" : ""}`} />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-[#1B3558]/70 mb-1.5 block">Project Type *</label>
                      <select {...register("projectType")} defaultValue="" className={`${inputClass} appearance-none cursor-pointer ${errors.projectType ? "border-red-400" : ""}`}>
                        <option value="" disabled>Select type...</option>
                        <option value="residential">Residential Villa</option>
                        <option value="commercial">Commercial Development</option>
                        <option value="interior">Luxury Interior Fit-Out</option>
                        <option value="consultation">Project Consultation</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-[#1B3558]/70 mb-1.5 block">Estimated Budget *</label>
                    <select {...register("budget")} defaultValue="" className={`${inputClass} appearance-none cursor-pointer ${errors.budget ? "border-red-400" : ""}`}>
                      <option value="" disabled>Select budget range...</option>
                      <option value="50-100k">$50,000 – $100,000</option>
                      <option value="100-250k">$100,000 – $250,000</option>
                      <option value="250-500k">$250,000 – $500,000</option>
                      <option value="500k+">$500,000+</option>
                      <option value="discuss">Prefer to Discuss</option>
                    </select>
                    {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget.message}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-[#1B3558]/70 mb-1.5 block">Project Description *</label>
                    <textarea
                      placeholder="Tell us about your vision, location, timeline, and any specific requirements..."
                      {...register("message")}
                      rows={5}
                      className={`${inputClass} h-auto py-3 resize-none ${errors.message ? "border-red-400" : ""}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1B3558] text-white font-bold py-4 rounded-md hover:bg-[#C9A84C] hover:text-[#1B3558] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-base shadow-sm"
                  >
                    {isSubmitting ? "Sending Your Inquiry..." : "Submit Project Inquiry"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
