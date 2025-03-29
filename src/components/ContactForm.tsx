
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { CheckCircle2 } from "lucide-react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Ready to transform your customer experience?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help you implement AI voice agents that deliver real business results.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Why contact us?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-voice-purple">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-gray-700">Get a personalized demo tailored to your business needs</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-voice-purple">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-gray-700">Learn about flexible pricing plans for businesses of all sizes</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-voice-purple">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-gray-700">Discuss custom integration with your existing systems</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 text-voice-purple">
                    <CheckCircle2 size={20} />
                  </div>
                  <p className="text-gray-700">Get expert advice on implementing AI voice solutions</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4 mb-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Customer Success" className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Customer Success Manager</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "We're committed to your success. Our team provides ongoing support and guidance to ensure you get the most from our voice AI technology."
              </p>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-semibold font-display mb-6">Get in Touch</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Inc."
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      How can we help?
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs and how we can assist you..."
                      rows={4}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-voice-purple hover:bg-voice-purple/90 text-white py-6 rounded-lg font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
