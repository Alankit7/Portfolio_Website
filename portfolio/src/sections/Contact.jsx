import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaGlobe } from 'react-icons/fa';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const formRef = useRef(null);
  const [sendError, setSendError] = useState(null);

  const { 
    register, 
    handleSubmit, 
    watch, 
    reset, 
    formState: { errors, isSubmitting, isSubmitSuccessful } 
  } = useForm();
  
  const messageChars = watch('message', '');

  const onSubmit = async () => {
    setSendError(null);

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn(
        'EmailJS is not configured (missing VITE_EMAILJS_* env vars). ' +
        'Form submission is running in dev-simulation mode — no email is being sent.'
      );
      await new Promise((resolve) => setTimeout(resolve, 1200));
      reset();
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      reset();
    } catch (err) {
      console.error('EmailJS send failed:', err);
      setSendError("Something went wrong sending your message — please try again or email me directly.");
      throw err; // re-throw so react-hook-form does not report a false success
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com' },
    { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: <FaTwitter />, label: 'Twitter', href: 'https://twitter.com' },
    { icon: <FaEnvelope />, label: 'Email', href: 'mailto:placeholder@email.com' },
    { icon: <FaGlobe />, label: 'Portfolio', href: '#' },
  ];

  return (
    <section id="contact" className="section-container">
      <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-12 text-center">
        Get In <span className="text-primary">Touch</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto w-full">
        {/* Left column — Social links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h3 className="text-2xl font-semibold text-textMain mb-4">Let's Connect</h3>
          <p className="text-textSecondary mb-8 leading-relaxed">
            Whether you have a question, a project proposal, or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-slate-700/50 hover:border-primary hover:-translate-y-1 hover:shadow-glow transition-all duration-300 text-textSecondary hover:text-primary"
              >
                <div className="text-2xl">{link.icon}</div>
                <span className="font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right column — Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form 
            ref={formRef} 
            onSubmit={handleSubmit(onSubmit)} 
            className="bg-card p-8 rounded-2xl border border-slate-700/50 shadow-lg space-y-6"
          >
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register('name', { required: 'Name is required' })}
                className="w-full bg-background border border-slate-700 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                })}
                className="w-full bg-background border border-slate-700 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                placeholder="Subject"
                {...register('subject', { required: 'Subject is required' })}
                className="w-full bg-background border border-slate-700 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Your Message"
                rows="5"
                {...register('message', { 
                  required: 'Message is required',
                  maxLength: { value: 500, message: 'Maximum 500 characters allowed' }
                })}
                className="w-full bg-background border border-slate-700 rounded-lg px-4 py-3 text-textMain focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-y"
              />
              <p className="text-xs text-textSecondary text-right mt-1">
                {messageChars.length}/500
              </p>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full btn-primary flex justify-center items-center gap-2"
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </button>

            {/* Success Banner */}
            {isSubmitSuccessful && !sendError && (
              <div className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-3 rounded-lg text-sm text-center">
                Message sent — I'll get back to you soon!
              </div>
            )}

            {/* Error Banner */}
            {sendError && (
              <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg text-sm text-center">
                {sendError}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
