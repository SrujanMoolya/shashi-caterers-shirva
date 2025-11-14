import { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import eventphoto1 from "../assets/eventphoto1.jpeg";
import eventphoto2 from "../assets/eventphoto2.jpeg";
import eventphoto6 from "../assets/eventphoto6.jpeg";
import eventphoto5 from "../assets/eventphoto5.jpeg";
import eventphoto4 from "../assets/eventphoto4.jpeg";
import eventphoto3 from "../assets/eventphoto3.jpeg";
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const galleryImages = [
    { id: 1, title: "Wedding Setup", category: "Weddings", image: eventphoto4 },
    { id: 2, title: "Corporate Event", category: "Corporate", image: eventphoto2  },
    { id: 3, title: "Buffet Display", category: "Setup", image: eventphoto3 },
    { id: 4, title: "Traditional Dishes", category: "Food", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZTFzoESc8ISWPz3py-uCCt4y_T_LUSmsFQ&s?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "Birthday Celebration", category: "Events", image: "https://www.spoonboon.com/assets/img/birthday-party-catering.jpg?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "Dessert Table", category: "Food", image: eventphoto6  },
    { id: 7, title: "Outdoor Catering", category: "Setup", image: "https://5.imimg.com/data5/PY/DR/LS/SELLER-102373353/outdoor-catering.jpg?auto=format&fit=crop&w=800&q=80" },
    { id: 8, title: "Special Occasion", category: "Events", image: eventphoto1 },
    { id: 9, title: "Elegant Presentation", category: "Weddings", image: eventphoto5},
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={headerRef}
          initial={{ y: 50, opacity: 0 }}
          animate={headerInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a look at our recent events and the memorable moments we've helped create
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Card
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group rounded-2xl"
                onClick={() => setSelectedImage(image.image)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-lg font-semibold">{image.title}</p>
                    <p className="text-sm">{image.category}</p>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
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
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-background rounded-lg overflow-hidden max-w-4xl w-full shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage} alt="Preview" className="w-full h-auto rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
