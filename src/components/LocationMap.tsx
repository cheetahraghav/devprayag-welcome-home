
import { useState } from "react";
import { MapPin, Navigation } from "lucide-react";

const LocationMap = () => {
  const [origin, setOrigin] = useState("");
  const destination = "No.16A,+Sunrise+Ave,+Reddykuppam,+Chennai,+Tamil+Nadu+600119";
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!origin) return;
    
    const mapUrl = `https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=${encodeURIComponent(origin)}&destination=${destination}&avoid=tolls|highways`;
    
    // In a real implementation, you would need to replace YOUR_API_KEY with an actual Google Maps API key
    // For now, we'll just show a basic map
    console.log("Would navigate to:", mapUrl);
  };
  
  return (
    <section id="location" className="section-padding bg-ceremony-pastel-green/30">
      <div className="ceremony-container">
        <h2 className="section-title">Location</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="ceremony-card mb-6">
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-grow">
                <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Starting Location
                </label>
                <input
                  type="text"
                  id="origin"
                  placeholder="Enter your starting point"
                  className="input-field"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
              </div>
              <div className="self-end">
                <button type="submit" className="button-primary h-12 flex items-center justify-center">
                  <MapPin size={18} className="mr-2" />
                  <span>Get Directions</span>
                </button>
              </div>
            </form>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0778835339756!2d80.24104207495791!3d12.830678617968846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b79de7f381f%3A0xffbbf3c26f351fba!2sSunrise%20Ave%2C%20Reddykuppam%2C%20Kanathur%2C%20Tamil%20Nadu%20600119!5e0!3m2!1sen!2sin!4v1712667598188!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="flex justify-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=No.16A,+Sunrise+Ave,+Reddykuppam,+Chennai,+Tamil+Nadu+600119"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary flex items-center justify-center"
            >
              <Navigation size={18} className="mr-2" />
              <span>Navigate in Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
