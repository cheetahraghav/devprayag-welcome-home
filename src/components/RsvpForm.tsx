
import { useState } from "react";
import { Check, User, Phone, Users, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RsvpForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "",
    message: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        description: "Please enter your name to RSVP",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would send data to a backend
    console.log("RSVP Submitted:", formData);
    
    toast({
      title: "RSVP Received!",
      description: "Thank you for your response. We look forward to celebrating with you!",
    });
    
    setSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", phone: "", guests: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };
  
  return (
    <section id="rsvp" className="section-padding bg-ceremony-pastel-pink/30">
      <div className="ceremony-container">
        <h2 className="section-title">RSVP</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="ceremony-card">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Thank You!</h3>
                <p className="text-center">Your RSVP has been submitted. We look forward to celebrating with you!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="input-field pl-10"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your Phone Number"
                      className="input-field pl-10"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Guests (Optional)
                  </label>
                  <div className="relative">
                    <Users size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      placeholder="How many guests will join you?"
                      min="0"
                      className="input-field pl-10"
                      value={formData.guests}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare 
                      size={18} 
                      className="absolute left-3 top-3 text-gray-400" 
                    />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Any message for the family..."
                      className="input-field pl-10 resize-none"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                
                <div className="flex justify-center pt-2">
                  <button type="submit" className="button-primary w-full sm:w-auto">
                    Submit RSVP
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RsvpForm;
