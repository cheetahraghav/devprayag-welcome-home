
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <section id="welcome" className="section-padding bg-gradient-to-b from-ceremony-cream to-ceremony-pastel-yellow/30">
      <div className="ceremony-container">
        <h2 className="section-title">Welcome Home</h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            With love and joy, we invite you to celebrate the Griha Pravesham of our home, Devprayag. This sacred ritual marks the beginning of a new chapter in our lives, and we'd be honored to have you join us in celebration.
          </p>
          
          <div className="ceremony-card mb-6 border-2 border-ceremony-gold/30 bg-white/80">
            <h3 className="font-playfair text-xl font-semibold mb-2 text-ceremony-maroon">Hosted By</h3>
            <p className="text-lg font-medium">Dr. Asokan D & Smt. Bhagirathi P</p>
          </div>
          
          <div className="ceremony-card border-2 border-ceremony-gold/30 bg-white/80">
            <h3 className="font-playfair text-xl font-semibold mb-2 text-ceremony-maroon">Event Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-sm text-ceremony-maroon font-semibold mb-1">Date</p>
                <p className="text-lg">Friday, 18th April 2025</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-ceremony-maroon font-semibold mb-1">Time</p>
                <p className="text-lg">3:30 AM to 5:30 AM onwards</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-ceremony-maroon font-semibold mb-1">Venue</p>
              <p className="text-center">
                No.16A, Sunrise Avenue, Reddykuppam,<br/>
                Kanathur, Chennai – 600119
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
