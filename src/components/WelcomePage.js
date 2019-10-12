import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  const Center = styled.div`
    display: flex;
    justify-content: center;
    margin: 5% auto;
  `;

  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Center>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </Center>
        <Center>
          <Link to="/characters">
            <Button>Meet the Characters</Button>
          </Link>
        </Center>
      </header>
    </section>
  );
}
