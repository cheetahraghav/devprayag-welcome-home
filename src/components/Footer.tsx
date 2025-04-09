
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-ceremony-pastel-green/20 border-t-2 border-ceremony-gold/30">
      <div className="ceremony-container">
        <div className="ceremony-divider">
          <span className="px-3 text-ceremony-gold">ॐ</span>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <p className="font-playfair text-xl mb-2 text-ceremony-maroon">Devprayag</p>
            <p className="text-sm text-gray-600">
              No.16A, Sunrise Avenue, Reddykuppam,<br/>
              Kanathur, Chennai – 600119
            </p>
          </div>
          
          <div className="flex justify-center mt-6">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-ceremony-gold/50 to-transparent"></div>
          </div>
          
          <div className="mt-6 text-center text-xs text-gray-500">
            <p>&copy; {currentYear} Devprayag Family. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      {/* Traditional design element */}
      <div className="w-full h-3 mt-4 bg-ceremony-pastel-yellow/50 border-t border-b border-ceremony-gold/20"></div>
    </footer>
  );
};

export default Footer;
