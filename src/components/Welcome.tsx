
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <section id="welcome" className="section-padding">
      <div className="ceremony-container">
        <h2 className="section-title">Welcome Home</h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-6">
            We are delighted to invite you to the housewarming ceremony of our new home, Devprayag. This sacred ritual marks the beginning of a new chapter in our lives, and we'd be honored to have you join us in celebration.
          </p>
          
          <div className="ceremony-card mb-6">
            <h3 className="font-playfair text-xl font-semibold mb-2 text-ceremony-maroon">Hosted By</h3>
            <p className="text-lg font-medium">Dr. Asokan D & Smt. Bhagirathi P</p>
          </div>
          
          <div className="ceremony-card">
            <h3 className="font-playfair text-xl font-semibold mb-2 text-ceremony-maroon">Venue</h3>
            <p className="text-center">
              No.16A, Sunrise Avenue, Reddykuppam,<br/>
              Kanathur, Chennai – 600119
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
