
import Header from "@/components/Header";
import Welcome from "@/components/Welcome";
import LocationMap from "@/components/LocationMap";
import RsvpForm from "@/components/RsvpForm";
import ContactSection from "@/components/ContactSection";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-ceremony-cream">
      <Header />
      <Welcome />
      <LocationMap />
      <RsvpForm />
      <Gallery />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
