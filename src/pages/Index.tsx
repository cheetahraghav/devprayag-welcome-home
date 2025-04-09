
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import LocationMap from "@/components/LocationMap";
import RsvpForm from "@/components/RsvpForm";
import ContactSection from "@/components/ContactSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  const [registeredGuests, setRegisteredGuests] = useState<string[]>([]);

  useEffect(() => {
    // Retrieve registered guests from localStorage
    const storedGuests = localStorage.getItem('registeredGuests');
    if (storedGuests) {
      setRegisteredGuests(JSON.parse(storedGuests));
    }
  }, []);

  // Function to add a new guest to the list
  const addGuest = (name: string) => {
    const updatedGuests = [...registeredGuests, name];
    setRegisteredGuests(updatedGuests);
    localStorage.setItem('registeredGuests', JSON.stringify(updatedGuests));
  };

  return (
    <div className="min-h-screen bg-ceremony-cream relative overflow-hidden">
      {/* Traditional pattern overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
          <img src="/lovable-uploads/048543a2-7707-4822-a83e-cff86eafd460.png" alt="Decorative element" className="w-full h-full object-contain" />
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rotate-90">
          <img src="/lovable-uploads/048543a2-7707-4822-a83e-cff86eafd460.png" alt="Decorative element" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10 -rotate-90">
          <img src="/lovable-uploads/048543a2-7707-4822-a83e-cff86eafd460.png" alt="Decorative element" className="w-full h-full object-contain" />
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 rotate-180">
          <img src="/lovable-uploads/048543a2-7707-4822-a83e-cff86eafd460.png" alt="Decorative element" className="w-full h-full object-contain" />
        </div>
      </div>
      
      {/* Traditional decorative border */}
      <div className="fixed top-0 left-0 w-full h-6 bg-gradient-to-r from-ceremony-gold/20 via-ceremony-pastel-orange/30 to-ceremony-gold/20 z-10"></div>
      <div className="fixed bottom-0 left-0 w-full h-6 bg-gradient-to-r from-ceremony-gold/20 via-ceremony-pastel-orange/30 to-ceremony-gold/20 z-10"></div>
      <div className="fixed top-0 left-0 h-full w-6 bg-gradient-to-b from-ceremony-gold/20 via-ceremony-pastel-orange/30 to-ceremony-gold/20 z-10"></div>
      <div className="fixed top-0 right-0 h-full w-6 bg-gradient-to-b from-ceremony-gold/20 via-ceremony-pastel-orange/30 to-ceremony-gold/20 z-10"></div>
      
      {/* Content */}
      <div className="relative z-10 pt-6 px-6">
        <Header />
        <Welcome />
        <LocationMap />
        <RsvpForm onGuestRegistered={addGuest} />
        
        {/* Registered Guests Section */}
        <section id="registered-guests" className="section-padding bg-gradient-to-b from-ceremony-cream to-ceremony-pastel-yellow/30">
          <div className="ceremony-container">
            <h2 className="section-title">Registered Guests</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="ceremony-card border-2 border-ceremony-gold/30 bg-white/80">
                {registeredGuests.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {registeredGuests.map((guest, index) => (
                      <div key={index} className="px-4 py-2 bg-ceremony-pastel-yellow/30 rounded-lg border border-ceremony-gold/20 text-center">
                        {guest}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-gray-500 italic">No guests registered yet</p>
                )}
              </div>
            </div>
          </div>
        </section>
        
        <Gallery />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
