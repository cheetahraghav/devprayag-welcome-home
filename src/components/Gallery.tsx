
import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      id: 1,
      src: "/lovable-uploads/fbbf7731-865e-400d-99b1-aed902e75bd8.png",
      alt: "Original Family Photo",
      caption: "Owners"
    },
    {
      id: 2,
      src: "/lovable-uploads/31cb75c3-ca2e-48a4-844e-b3eff9f68bfd.png",
      alt: "Illustrated Family Portrait",
      caption: "Ghibli"
    },
    {
      id: 3,
      src: "/lovable-uploads/e64df5e9-fbe4-4d64-859b-3e51b70dd0f0.png",
      alt: "Thiruporur Murugar",
      caption: "Thiruporur Murugar",
      placeholder: false
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
              className={`ceremony-card overflow-hidden flex flex-col border-2 border-ceremony-gold/30 ${
                image.placeholder ? "bg-ceremony-pastel-pink/20" : ""
              }`}
            >
              <div className="relative pb-[75%] overflow-hidden rounded-lg mb-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => !image.placeholder && handleImageClick(image.src)}
                  className={`absolute h-full w-full object-cover transition-transform ${
                    image.placeholder ? "" : "hover:scale-105 cursor-pointer"
                  } ${image.placeholder ? "opacity-40" : ""}`}
                />
                {image.placeholder && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-medium text-gray-500">Coming Soon</span>
                  </div>
                )}
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
