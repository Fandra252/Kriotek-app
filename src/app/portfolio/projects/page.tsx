"use client";
import { Container } from "@/components/common/styles/Container";
import Header from "@/components/Header/Header";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/components/common/theme";

function Projects() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <h1>Projects</h1>
        {/* Add your projects here */}
      </Container>
    </ThemeProvider>
  );
}

export default Projects;
