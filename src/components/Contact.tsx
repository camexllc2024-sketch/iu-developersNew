import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is required"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const inputClass = "w-full h-12 px-4 rounded-md border border-[#1B3558]/20 bg-white text-[#1B3558] placeholder:text-[#1B3558]/40 focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40 focus:border-[#C9A84C] transition-all duration-200 text-sm";

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F4F6FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* CTA Band */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#1B3558] rounded-3xl p-10 md:p-16 text-center mb-24 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.15),transparent)]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
              Partner with Rwanda's premier development agency to bring your visionary project to life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#C9A84C] text-[#1B3558] font-bold px-10 py-4 rounded-md hover:bg-[#B8960A] transition-all duration-200 shadow-lg text-lg"
            >
              Book a Free Consultation
            </Link>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#C9A84C] font-semibold tracking-widest uppercase text-sm mb-4 block"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6 text-[#1B3558]"
            >
              Let's Discuss <br /> Your Vision
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#1B3558]/65 mb-12 text-lg leading-relaxed"
            >
              Whether it's a luxury residential villa, a commercial masterpiece, or a bespoke interior fit-out, our team is ready to deliver excellence.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: MapPin, title: "Headquarters", detail: "Kibagabaga, Gasabo, Kigali" },
                { icon: Phone, title: "Direct Line", detail: "+250 783 247 298" },
                { icon: Mail, title: "Email", detail: "info@iudevelopers.com" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1B3558]/08 border border-[#1B3558]/12 flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C] group-hover:border-[#C9A84C] transition-all duration-300">
                    <item.icon className="w-5 h-5 text-[#C9A84C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[#1B3558] font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-[#1B3558]/60">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl border border-[#1B3558]/08 shadow-lg relative"
          >
            {isSuccess ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-3xl z-10 p-8 text-center">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-display font-bold text-[#1B3558] mb-4">Request Received!</h3>
                <p className="text-[#1B3558]/65 text-lg">
                  Thank you for reaching out. One of our lead consultants will contact you shortly.
                </p>
              </div>
            ) : null}

            <h3 className="text-2xl font-display font-bold text-[#1B3558] mb-8">Send Us a Message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-[#1B3558]/70 mb-1.5 block">Full Name</label>
                  <input placeholder="John Doe" {...register("name")} className={`${inputClass} ${errors.name ? "border-red-400" : ""}`} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1B3558]/70 mb-1.5 block">Email Address</label>
                  <input placeholder="john@example.com" type="email" {...register("email")} className={`${inputClass} ${errors.email ? "border-red-400" : ""}`} />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-[#1B3558]/70 mb-1.5 block">Phone Number</label>
                  <input placeholder="+250 788..." {...register("phone")} className={`${inputClass} ${errors.phone ? "border-red-400" : ""}`} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="text-sm font-semibold text-[#1B3558]/70 mb-1.5 block">Project Type</label>
                  <select
                    {...register("projectType")}
                    className={`${inputClass} appearance-none cursor-pointer ${errors.projectType ? "border-red-400" : ""}`}
                    defaultValue=""
                  >
                    <option value="" disabled>Select a type...</option>
                    <option value="residential">Residential Villa</option>
                    <option value="commercial">Commercial Development</option>
                    <option value="interior">Luxury Interior Fit-out</option>
                    <option value="consultation">Project Consultation</option>
                  </select>
                  {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-[#1B3558]/70 mb-1.5 block">Project Details</label>
                <textarea
                  placeholder="Tell us about your vision..."
                  {...register("message")}
                  rows={4}
                  className={`${inputClass} h-auto py-3 resize-none ${errors.message ? "border-red-400" : ""}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1B3558] text-white font-bold py-4 rounded-md hover:bg-[#C9A84C] hover:text-[#1B3558] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-base shadow-sm"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
