
import { Helmet } from "react-helmet";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="bg-white dark:bg-and-dark min-h-screen">
      <Helmet>
        <title>AND Studios - Video & Design</title>
        <meta name="description" content="Professional video production and graphic design services by AND Studios" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
