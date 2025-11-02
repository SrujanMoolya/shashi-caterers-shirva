import { useState } from "react";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { id: 1, title: "Wedding Setup", category: "Weddings", image: "https://cdn0.weddingwire.in/vendor/7436/3_2/960/jpeg/wedding-caterers-suryakant-dandekar-catering-setup-1_15_457436-169830407732163.jpeg?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Corporate Event", category: "Corporate", image: "https://www.omorganickitchen.com/wp-content/uploads/2022/07/perks-pic.jpg?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Buffet Display", category: "Setup", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsrt50bMfvDWxXCj1meUXLeLRbFRQ5yO-GOQ&s?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "Traditional Dishes", category: "Food", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZTFzoESc8ISWPz3py-uCCt4y_T_LUSmsFQ&s?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "Birthday Celebration", category: "Events", image: "https://www.spoonboon.com/assets/img/birthday-party-catering.jpg?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "Dessert Table", category: "Food", image: "https://khoyamithai.com/cdn/shop/files/ODC_SMALL_BANNER_1.jpg?v=1683538197&width=520?auto=format&fit=crop&w=800&q=80" },
    { id: 7, title: "Outdoor Catering", category: "Setup", image: "https://5.imimg.com/data5/PY/DR/LS/SELLER-102373353/outdoor-catering.jpg?auto=format&fit=crop&w=800&q=80" },
    { id: 8, title: "Special Occasion", category: "Events", image: "https://ganeshaeksanskriti.com/cdn/shop/articles/IMG_7168.jpg?v=1724407315&width=1100?auto=format&fit=crop&w=800&q=80" },
    { id: 9, title: "Elegant Presentation", category: "Weddings", image: "https://dehradunweddingplanners.com/wp-content/uploads/2025/07/Exceptional-Wedding-Food.webp?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a look at our recent events and the memorable moments we've helped create
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group rounded-2xl"
              onClick={() => setSelectedImage(image.image)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                  <p className="text-lg font-semibold">{image.title}</p>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Follow us on Instagram for more photos and updates from our recent events
          </p>
          <a
            href="https://instagram.com/shashicaterers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium mt-2 inline-block"
          >
            @shashicaterers
          </a>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-background rounded-lg overflow-hidden max-w-4xl w-full shadow-lg">
            <img src={selectedImage} alt="Preview" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
