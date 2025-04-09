
import { CalendarDays, MapPin, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 bg-gradient-to-r from-ceremony-pastel-yellow/60 to-ceremony-pastel-orange/60">
      <div className="ceremony-container flex flex-col items-center">
        <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-ceremony-maroon text-center animate-fade-in">
          Griha Pravesham
        </h1>
        <div className="ceremony-divider">
          <span className="px-2 text-ceremony-gold">✧</span>
        </div>
        <p className="text-center text-lg sm:text-xl md:text-2xl font-playfair italic text-ceremony-maroon/90 max-w-2xl animate-fade-in">
          "With love and joy, we invite you to celebrate the Griha Pravesham of our home, Devprayag."
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8 animate-fade-in">
          <div className="flex items-center gap-2">
            <CalendarDays className="ceremony-icon" size={20} />
            <span className="font-medium">Friday, 18th April 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="ceremony-icon" size={20} />
            <span className="font-medium">3:30 AM - 5:30 AM onwards</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="ceremony-icon" size={20} />
            <span className="font-medium">Sunrise Avenue, Chennai</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
