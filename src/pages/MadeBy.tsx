import { motion } from "framer-motion";
import { Building2, Code, Palette, Rocket, Globe, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MadeBy = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Web Development",
      description: "Custom websites & web applications"
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Software Solutions",
      description: "Tailored software for your business needs"
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces"
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Digital Marketing",
      description: "SEO, social media & online presence"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {/* SVVAAP Innovations Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <img 
                src="https://svvaap.in/assets/logo_dark-DGRfYr3V.png" 
                alt="SVVAAP Innovations" 
                className="h-12 mx-auto mb-4"
              />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                21xengineers
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                A Unit of SVVAAP Innovations
              </p>
              <p className="text-lg text-muted-foreground">
                Building Digital Excellence Since Day One
              </p>
            </motion.div>
          </motion.div>

          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl font-bold">About Us</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-primary">21xengineers</strong> is a creative digital agency under <strong className="text-secondary">SVVAAP Innovations</strong>, 
                  specializing in cutting-edge web development, innovative software solutions, and comprehensive digital marketing services.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We transform ideas into reality by crafting beautiful, functional, and SEO-optimized websites that help businesses 
                  grow their online presence and reach their target audience effectively.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/40">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 21xengineers Card */}
              <Card className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary">21xengineers</h3>
                  <div className="space-y-4">
                    <a 
                      href="https://21xengineers.svvaap.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <Globe className="w-5 h-5 flex-shrink-0" />
                      <span className="group-hover:underline">21xengineers.svvaap.in</span>
                      <ExternalLink className="w-4 h-4 ml-auto" />
                    </a>
                    <a 
                      href="mailto:workwithsvvaap@gmail.com" 
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5 flex-shrink-0" />
                      <span>workwithsvvaap@gmail.com</span>
                    </a>
                  {/* contact - 7899535703 */}
                    <a 
                   
                    href={`https://wa.me/917899535703`}
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <span>+91 7899535703</span>
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 flex-shrink-0" />
                      <span>udupi , karnataka, India</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* SVVAAP Innovations Card */}
              <Card className="border-2 border-secondary/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-secondary">SVVAAP Innovations</h3>
                  <div className="space-y-4">
                    <a 
                      href="https://svvaap.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors group"
                    >
                      <Globe className="w-5 h-5 flex-shrink-0" />
                      <span className="group-hover:underline">svvaap.in</span>
                      <ExternalLink className="w-4 h-4 ml-auto" />
                    </a>
                    <a 
                      href="mailto:workwithsvvaap@gmail.com" 
                      className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors"
                    >
                      <Mail className="w-5 h-5 flex-shrink-0" />
                      <span>workwithsvvaap@gmail.com</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">🎯 Results-Driven</h3>
                    <p className="text-muted-foreground">
                      We focus on delivering measurable results and ROI for your business.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">🚀 Modern Technology</h3>
                    <p className="text-muted-foreground">
                      Using the latest frameworks and best practices for optimal performance.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">💡 Creative Solutions</h3>
                    <p className="text-muted-foreground">
                      Innovative approaches tailored to your unique business needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technologies Used for This Site */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-6">Technologies Used for Shashi Caterers Website</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Framer Motion', 'Shadcn/ui', 'React Router'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-6 text-muted-foreground">
              ⚡ Optimized for Speed • 📱 Mobile-First • 🔍 SEO-Ready • 🎨 Modern Design
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MadeBy;
