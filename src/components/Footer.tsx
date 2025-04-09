
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-ceremony-pastel-green/20 border-t border-ceremony-gold/20">
      <div className="ceremony-container">
        <div className="ceremony-divider">
          <span className="px-3 text-ceremony-gold">ॐ</span>
        </div>
        
        <div className="text-center">
          <p className="font-playfair text-xl mb-2">Devprayag</p>
          <p className="text-sm text-gray-600">
            No.16A, Sunrise Avenue, Reddykuppam,<br/>
            Kanathur, Chennai – 600119
          </p>
        </div>
        
        <div className="mt-6 text-center text-xs text-gray-500">
          <p>&copy; {currentYear} Devprayag Family. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
