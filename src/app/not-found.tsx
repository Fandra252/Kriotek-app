"use client"
import { Container } from "@/components/common/styles/Container";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <Container>
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go Back Home</Link>
    </Container>
  );
}

export default NotFound;
