
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { Calendar, User, Users, MessageSquare } from "lucide-react";

interface RsvpFormProps {
  onGuestRegistered?: (name: string) => void;
}

interface FormData {
  name: string;
  phone: string;
  guests: number;
  message: string;
}

const RsvpForm = ({ onGuestRegistered }: RsvpFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      name: "",
      phone: "",
      guests: 1,
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission with timeout
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Store RSVP data in localStorage
      const existingData = localStorage.getItem("rsvpSubmissions");
      const submissions = existingData ? JSON.parse(existingData) : [];
      submissions.push(data);
      localStorage.setItem("rsvpSubmissions", JSON.stringify(submissions));
      
      // Update registered guests list
      if (onGuestRegistered && data.name) {
        onGuestRegistered(data.name);
      }
      
      toast.success("RSVP submitted successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to submit RSVP. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="rsvp" className="section-padding bg-gradient-to-b from-ceremony-pastel-pink/20 to-ceremony-cream">
      <div className="ceremony-container">
        <h2 className="section-title">RSVP</h2>
        
        <div className="max-w-lg mx-auto">
          <div className="ceremony-card border-2 border-ceremony-gold/30">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-ceremony-maroon flex items-center gap-1">
                  <User size={16} /> Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="input-field border-ceremony-pastel-orange/40"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
              </div>
              
              <div className="space-y-1">
                <label htmlFor="phone" className="block text-sm font-medium text-ceremony-maroon flex items-center gap-1">
                  <Calendar size={16} /> Phone Number
                </label>
                <Input
                  id="phone"
                  {...register("phone")}
                  className="input-field border-ceremony-pastel-orange/40"
                  placeholder="Your phone number (optional)"
                />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="guests" className="block text-sm font-medium text-ceremony-maroon flex items-center gap-1">
                  <Users size={16} /> Number of Guests
                </label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="10"
                  {...register("guests", { 
                    valueAsNumber: true,
                    min: { value: 1, message: "Minimum 1 guest" },
                    max: { value: 10, message: "Maximum 10 guests" }
                  })}
                  className="input-field border-ceremony-pastel-orange/40"
                />
                {errors.guests && <p className="text-xs text-red-500">{errors.guests.message}</p>}
              </div>
              
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-ceremony-maroon flex items-center gap-1">
                  <MessageSquare size={16} /> Message
                </label>
                <Textarea
                  id="message"
                  {...register("message")}
                  className="input-field min-h-[100px] border-ceremony-pastel-orange/40"
                  placeholder="Any message for us (optional)"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full button-primary"
              >
                {isSubmitting ? "Submitting..." : "Submit RSVP"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RsvpForm;
