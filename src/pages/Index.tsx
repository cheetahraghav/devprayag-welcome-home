
import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import LocationMap from "@/components/LocationMap";
import RsvpForm from "@/components/RsvpForm";
import ContactSection from "@/components/ContactSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
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
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Welcome />
        <LocationMap />
        <RsvpForm />
        <Gallery />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
