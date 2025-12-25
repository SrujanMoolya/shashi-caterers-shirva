import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const WebsiteCredit = () => {
  return (
    <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border-t border-primary/10">
      <div className="container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm"
        >
          <span className="text-muted-foreground">Website Designed & Developed by</span>
          <Link 
            to="/made-by"
            className="flex items-center gap-2 font-semibold text-primary hover:text-secondary transition-colors group"
          >
            <span className="text-lg">21xengineers</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <span className="text-muted-foreground hidden md:inline">•</span>
          <a 
            href="https://svvaap.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <span className="text-muted-foreground">A Unit of</span>
            <img 
              src="https://svvaap.in/assets/logo_dark-DGRfYr3V.png" 
              alt="SVVAAP Innovations" 
              className="h-6 opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default WebsiteCredit;
