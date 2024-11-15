"use client";
import Header from "@/components/Header/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "@/components/common/theme";
import { Container } from "@/components/common/styles/Container";

function page() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <h1>Services</h1>
      </Container>
    </ThemeProvider>
  );
}

export default page;
