import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './style.css';

export default function Header({ children }) {
  return (
    <>
      <header className="bg-banner">
        <Container className="text-banner">
            {children}
        </Container>
      </header>
    </>
  );
}
