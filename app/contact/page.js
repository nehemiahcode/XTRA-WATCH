"use client";
import { useEffect } from "react";
import Contacts from "../components/Contact";
import Container from "../components/layout/Container";
import Contact2 from "../components/Contact2";

function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Container>
      <Contact2 />
      <Contacts />
    </Container>
  );
}

export default Contact;
