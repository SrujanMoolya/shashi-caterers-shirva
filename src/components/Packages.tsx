import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Packages = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const packages = [
    {
      name: "Wedding Package",
      description: "Comprehensive catering for your special day",
      price: "Starting from ₹500/plate",
      features: [
        "Full vegetarian & non-vegetarian menu",
        "Welcome drinks and appetizers",
        "Main course (5-7 dishes)",
        "Variety of desserts",
        "Traditional South Indian sweets",
        "Professional service staff",
        "Elegant buffet setup",
        "Custom menu consultation",
      ],
      popular: true,
    },
    {
      name: "Corporate Package",
      description: "Perfect for business events and meetings",
      price: "Starting from ₹300/plate",
      features: [
        "Breakfast/Lunch/Dinner options",
        "Variety of vegetarian dishes",
        "Selected non-vegetarian items",
        "Tea/Coffee with snacks",
        "Professional presentation",
        "Timely service",
        "Flexible menu options",
        "Volume discounts available",
      ],
    },
    {
      name: "Events Package",
      description: "Ideal for birthdays and celebrations",
      price: "Starting from ₹350/plate",
      features: [
        "Customizable menu",
        "Appetizers and starters",
        "Main course (3-5 dishes)",
        "Desserts and beverages",
        "Birthday cake arrangement",
        "Decoration assistance",
        "Flexible guest count",
        "Theme-based catering available",
      ],
    },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Packages</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our carefully curated packages or let us create a custom solution for your event
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card 
                className={`relative hover:shadow-xl transition-shadow h-full ${
                  pkg.popular ? 'border-primary border-2' : ''
                }`}
              >
                {pkg.popular && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium"
                  >
                    Most Popular
                  </motion.div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="mt-4"
                  >
                    <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  </motion.div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        className="w-full" 
                        variant={pkg.popular ? "default" : "outline"}
                      >
                        Get Quote
                      </Button>
                    </motion.div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-3xl mx-auto bg-muted rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Need a Custom Package?</h2>
          <p className="text-muted-foreground mb-6">
            We understand that every event is unique. Our team can create a personalized package 
            tailored to your specific requirements, guest count, and budget.
          </p>
          <Link to="/contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button size="lg" variant="default">
                Contact Us for Custom Quote
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Packages;
