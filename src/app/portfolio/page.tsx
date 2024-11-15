"use client";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "@/components/common/theme";
import { Container } from "@/components/common/styles/Container";
import Link from "next/link";

function page() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <h1>Portfolio</h1>
        <h3>
          <Link href={"/portfolio/projects"}>Projects</Link>
        </h3>
      </Container>
    </ThemeProvider>
  );
}

export default page;
