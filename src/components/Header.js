import React from "react";
import styled from "styled-components";

export default function Header() {
  const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 5%;
  `;

  return (
    <Wrapper>
      <h1>Rick &amp; Morty Fan Page</h1>
    </Wrapper>
  );
}
