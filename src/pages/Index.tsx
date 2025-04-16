
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
  // Define the variants correctly - move transition inside the variant properties
  const fadeInUp = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-and-navy to-gray-900 min-h-screen">
      <Helmet>
        <title>A.N.D STUDIOS - Video & Design</title>
        <meta name="description" content="A.N.D STUDIOS - Professional video production and graphic design services" />
      </Helmet>
      <Navbar />
      <Hero />
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <About />
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Services />
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Portfolio />
      </motion.div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Contact />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Index;
