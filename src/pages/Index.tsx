
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Melhorar as variantes de animação com mais detalhes
  const fadeInUp = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.95 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 50
      }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-and-navy to-gray-900 min-h-screen overflow-x-hidden">
      <Helmet>
        <title>A.N.D STUDIOS - Video & Design</title>
        <meta name="description" content="A.N.D STUDIOS - Professional video production and graphic design services" />
      </Helmet>
      <Navbar />
      <Hero />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div
          variants={fadeInUp}
          whileHover="hover"
        >
          <About />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          whileHover="hover"
        >
          <Services />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          whileHover="hover"
        >
          <Portfolio />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          whileHover="hover"
        >
          <Contact />
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Index;
