import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Users, Star, Calendar, Utensils, Package, Quote, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-catering.jpg";
import About from "@/components/About";
// import contact , footer , gallery, menu , packages ,testimonial
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import Packages from "@/components/Packages";
import Testimonial from "@/components/Testimonials";
import InstagramFeed from '@/components/InstaReel';
import logo_long from "@/assets/long_logo.png";



const Home = () => {
  const features = [
    {
      icon: <ChefHat className="w-8 h-8 text-primary" />,
      title: "Expert Chefs",
      description: "Professional culinary team with years of experience",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Custom Menus",
      description: "Tailored packages for every occasion and guest count",
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Quality Assured",
      description: "Fresh ingredients and authentic recipes",
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Event Planning",
      description: "Complete catering solutions from start to finish",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://5.imimg.com/data5/ANDROID/Default/2024/10/458708834/FH/SD/NX/143617138/product-jpeg-500x500.jpg"
            alt="Elegant South Indian wedding feast with traditional dishes"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-orange-900/40" />
          
          {/* Animated Overlay Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          {/* Logo with Animation */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <img 
              src={logo_long} 
              alt="Shashi Caterers Logo"  
              className="w-auto h-48 md:h-64 mx-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 tracking-tight"
          >
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">
              SHASHI CATERERS
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl mb-3 font-bold text-amber-300"
          >
            Wedding, Corporate & Everyday Celebrations
          </motion.p>
          
          {/* Location */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-xl mb-8 text-white/90 font-medium"
          >
            🍛 Authentic South Indian Cuisine • 📍 Shirva, Udupi
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {[
              { icon: "🏆", text: "15+ Years Experience" },
              { icon: "👨‍🍳", text: "Expert Chefs" },
              { icon: "🎉", text: "1000+ Events" },
              { icon: "⭐", text: "100% Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-sm md:text-base font-semibold">{stat.text}</span>
              </div>
            ))}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg font-bold shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/70 transition-all hover:scale-105 group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/menu">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 px-8 py-6 text-lg font-bold shadow-xl transition-all hover:scale-105"
              >
                View Menu
                <ChefHat className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 text-white/70 text-sm"
          >
            <p className="flex items-center justify-center gap-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              Trusted by thousands of families across Karnataka
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>


      <About/>
      <Menu/>
      <Packages/>
      <Gallery/>
      
      <InstagramFeed/>
      <Testimonial/>
      <Contact/>





      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose shashi Caterers?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience exceptional catering services that make your events unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Signature Dishes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Authentic South Indian flavors crafted with fresh ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              { name: "Traditional Thali", desc: "Complete meal with variety of dishes", icon: Utensils },
              { name: "Special Biryani", desc: "Aromatic rice with authentic spices", icon: ChefHat },
              { name: "South Indian Sweets", desc: "Traditional desserts and delicacies", icon: Star }
            ].map((item, index) => (
              <Card key={index} className="border-border hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/menu">
              <Button size="lg" variant="default">
                Explore Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Let us make your celebration memorable with our exceptional catering services
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
