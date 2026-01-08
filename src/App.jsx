import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => el.classList.add('active'));
  }, []);
  
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

export default App;