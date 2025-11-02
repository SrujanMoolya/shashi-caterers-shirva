import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210";
  const message = "Hi! I'm interested in your catering services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA59] text-white p-4 rounded-full shadow-lg group"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        y: [0, -10, 0]
      }}
      transition={{ 
        scale: { duration: 0.5, delay: 1 },
        opacity: { duration: 0.5, delay: 1 },
        y: { 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1.5
        }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ 
          duration: 1, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.div>
      <motion.span 
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Chat with us
      </motion.span>
    </motion.a>
  );
};

export default WhatsAppButton;
