
import { Phone } from "lucide-react";

const ContactSection = () => {
  const contacts = [
    { name: "You", phone: "9363780046" },
    { name: "Amma (Rathi)", phone: "9941492162" },
    { name: "Shakthi (Dushyantram)", phone: "9360991527" },
    { name: "Dad (Asokan)", phone: "9840910655" },
  ];
  
  return (
    <section id="contact" className="section-padding">
      <div className="ceremony-container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-lg mb-8">
            For any queries or assistance, feel free to reach out to us on WhatsApp.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {contacts.map((contact) => (
              <div key={contact.phone} className="ceremony-card flex flex-col items-center">
                <div className="font-medium mb-2 font-playfair">{contact.name}</div>
                <a
                  href={`https://wa.me/91${contact.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-2 px-4 rounded-lg hover:bg-[#128C7E] transition-colors w-full"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.415 14.382C17.117 14.233 15.656 13.515 15.384 13.415C15.112 13.316 14.914 13.267 14.715 13.565C14.517 13.864 13.948 14.532 13.775 14.731C13.601 14.93 13.428 14.954 13.131 14.806C12.834 14.657 11.876 14.341 10.741 13.329C9.858 12.541 9.259 11.568 9.086 11.27C8.913 10.971 9.068 10.811 9.218 10.664C9.352 10.531 9.516 10.317 9.664 10.144C9.813 9.97 9.862 9.846 9.961 9.647C10.06 9.448 10.011 9.275 9.936 9.127C9.862 8.979 9.266 7.515 9.018 6.92C8.776 6.341 8.532 6.416 8.349 6.407C8.176 6.399 7.977 6.399 7.779 6.399C7.581 6.399 7.259 6.474 6.987 6.772C6.715 7.071 5.947 7.789 5.947 9.253C5.947 10.717 7.012 12.132 7.161 12.331C7.309 12.53 9.258 15.525 12.239 16.812C12.949 17.118 13.502 17.301 13.933 17.437C14.645 17.664 15.293 17.632 15.805 17.556C16.376 17.471 17.563 16.837 17.811 16.143C18.059 15.448 18.059 14.853 17.984 14.731C17.91 14.609 17.712 14.531 17.415 14.382Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.8422 3.16031C16.7292 -0.891689 10.2532 -1.0237 6.01818 2.81131C1.78318 6.65231 1.42218 13.1083 5.16818 17.3843L5.50018 17.7523L4.36218 21.9523L8.65918 20.8373L9.01018 21.1473C10.7462 22.3483 12.7552 22.9993 14.7582 22.9993C16.9022 22.9993 19.0462 22.2613 20.8412 20.8233C25.0762 17.0223 25.4402 10.5623 21.7652 6.27331L20.8422 3.16031ZM14.7582 21.0453C12.9842 21.0453 11.2142 20.4463 9.71618 19.3313L9.38218 19.1133L6.86818 19.7453L7.51118 17.2933L7.27318 16.9433C4.88618 13.0803 5.74918 7.98531 9.19918 5.12931C12.6502 2.27331 17.7602 2.70531 20.6162 6.15231C23.4772 9.60531 23.0482 14.7173 19.6062 17.5783C18.0962 18.7403 16.4272 21.0453 14.7582 21.0453Z"
                      fill="white"
                    />
                  </svg>
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
