import Blogs from "@/src/components/Blogs";
import Contact from "@/src/components/Contact";
import Home from "@/src/components/Home";
import Portfolio from "@/src/components/Portfolio";
import Service from "@/src/components/Service";
import AboutMe from "@/src/components/about/AboutMe";
import Experience from "@/src/components/about/Experience";
import { context } from "@/src/context/context";
import Layout from "@/src/layout/Layout";
import { useContext, useEffect } from "react";
const Index = () => {
  const { animationChnage } = useContext(context);
  useEffect(() => {
    animationChnage(null);
  }, []);

  return (
    <Layout>
      {/* HOME */}
      <Home />
      {/* /HOME */}
      {/* ABOUT */}
      <Experience />
      {/* /ABOUT */}
      {/* SERVICES */}
      <Portfolio />
      {/* /SERVICES */}
      {/* PORTFOLIO */}
      
      {/* /PORTFOLIO */}
      {/* NEWS */}
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
      {/* /CONTACT */}
    </Layout>
  );
};
export default Index;
