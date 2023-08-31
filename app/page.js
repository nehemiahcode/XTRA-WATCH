"use client";
import { useEffect } from "react";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Container from "./components/layout/Container";
import Section1 from "./components/section1";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Container>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Container>
    </>
  );
}
