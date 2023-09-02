"use client";
import { useEffect } from "react";
import Container from "../components/layout/Container";
import Section4 from "../components/Section4";
import Tab from "../components/Tabs";

function Store() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Container>
     <Tab/>
     <Section4/>
    </Container>
  );
}

export default Store;
