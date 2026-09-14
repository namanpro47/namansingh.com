import Contact from "@/src/components/Contact";
import Content from "@/src/components/Content";
import Home from "@/src/components/Home";
import Portfolio from "@/src/components/Portfolio";
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
      <Home />
      <Experience />
      <Portfolio />
      <Content />
      <Contact />
    </Layout>
  );
};
export default Index;
