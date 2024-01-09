import React from "react";
import { motion } from "framer-motion";

import { Container } from "./LayoutStyles";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export const Layout = ({ children }) => {
  return (
    <Container>
      {/* add all the seo headers using nextjs */}
      <meta
        name="description"
        content="I am a full stack MERN developer and JavaScript enthusiast with more than 5 years' work experience. I have hand-on experience in developing Highly *Scalable* web applications. Proven ability to deliver high-quality software on time and within budget. Always eager to learn new web technologies."
      />
      <meta property="og:site_name" content="mazanlabeeb.me" />
      <meta
        property="og:title"
        content="Want to Collaborate or Work with me? Contact me on Upwork."
      />
      <meta
        property="og:description"
        content="I am Mazan Labeeb. I am a full stack web developer with a working experience of more than 5 years. "
      />
      <meta
        property="og:image"
        itemprop="image"
        content="https://www.mazanlabeeb.me/poster.png"
      />
      <Header />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear", duration: 0.8 }}
      >
        {children}
      </motion.main>
      <Footer />
      <ScrollToTop />
    </Container>
  );
};
