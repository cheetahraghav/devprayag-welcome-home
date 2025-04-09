
import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      id: 1,
      src: "/lovable-uploads/fbbf7731-865e-400d-99b1-aed902e75bd8.png",
      alt: "Family Photo",
      caption: "ABD's"
    },
    {
      id: 2,
      src: "/lovable-uploads/31cb75c3-ca2e-48a4-844e-b3eff9f68bfd.png",
      alt: "Illustrated Family Portrait",
      caption: "Ghibli"
    },
    {
      id: 3,
      src: "/lovable-uploads/d8f2dfd6-4739-4d35-8df1-f77feedcbb4b.png",
      alt: "Deity Image",
      caption: "Devprayag"
    }
  ];
  
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };
  
  return (
    <section id="gallery" className="section-padding bg-ceremony-pastel-yellow/30">
      <div className="ceremony-container">
        <h2 className="section-title">Gallery</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {images.map((image) => (
            <div
              key={image.id}
              className="ceremony-card overflow-hidden flex flex-col border-2 border-ceremony-gold/30"
            >
              <div className="relative pb-[75%] overflow-hidden rounded-lg mb-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => handleImageClick(image.src)}
                  className="absolute h-full w-full object-cover transition-transform hover:scale-105 cursor-pointer"
                />
              </div>
              <p className="text-center text-sm font-medium">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white bg-black/40 rounded-full p-2"
            onClick={closeModal}
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
