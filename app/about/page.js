"use client";
import Container from "@/app/components/layout/Container";
import Aboutsec1 from "../components/Aboutsec1";
import { useEffect } from "react";
import Testimonial from "../components/Testimonial";
export default function Details() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Container>
      <Aboutsec1 />
      <Testimonial/>
    </Container>
  );
}
