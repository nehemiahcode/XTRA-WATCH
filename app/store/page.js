"use client";
import { useEffect } from "react";
import Container from "../components/layout/Container";

function Store() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Container>
      <div>page</div>
    </Container>
  );
}

export default Store;
