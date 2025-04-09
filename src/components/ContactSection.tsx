import { Phone, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const contacts = [
    {
      name: "Dhasradraghav (Vishal)",
      phone: "9363780046",
      color: "bg-emerald-500"
    },
    {
      name: "Rathi",
      phone: "9941492162",
      color: "bg-pink-500"
    },
    {
      name: "Shakthi (Dushyantram)",
      phone: "9360991527",
      color: "bg-blue-500"
    },
    {
      name: "Asokan",
      phone: "9840910655",
      color: "bg-amber-500"
    }
  ];

  const handleWhatsAppClick = (phone: string) => {
    window.open(`https://wa.me/91${phone}`, "_blank");
  };

  const handleCallClick = (phone: string) => {
    window.open(`tel:${phone}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-ceremony-pastel-green/30 to-ceremony-cream">
      <div className="ceremony-container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contacts.map((contact) => (
              <Card key={contact.phone} className="overflow-hidden border-2 border-ceremony-gold/30">
                <CardContent className="p-0">
                  <div className="p-4 bg-white">
                    <h3 className="font-medium text-lg text-center">{contact.name}</h3>
                  </div>
                  <div className="bg-gradient-to-r from-ceremony-pastel-orange to-ceremony-pastel-pink p-4 flex flex-col items-center gap-3">
                    <p className={`${contact.color} text-white py-2 px-4 rounded-full font-medium text-sm`}>
                      {contact.phone}
                    </p>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => handleWhatsAppClick(contact.phone)}
                        className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-2 rounded-full w-10 h-10 transition-colors"
                        aria-label={`WhatsApp ${contact.name}`}
                      >
                        <MessageCircle size={20} />
                      </button>
                      <button
                        onClick={() => handleCallClick(contact.phone)}
                        className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full w-10 h-10 transition-colors"
                        aria-label={`Call ${contact.name}`}
                      >
                        <Phone size={20} />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
