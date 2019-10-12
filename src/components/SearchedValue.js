import React, { useState } from "react";
import styled from "styled-components";

export default function SearchedValue({ searchValue }) {
  const CardSizing = styled.div`
    width: 75%;
    display: flex;
    flex-flow: row wrap;
    border: 1px solid lightgrey;
    margin: 3% auto;
    justify-content: center;
    align-content: center;
    width: 50vw;
    min-height: 50vh;
    max-width: 1024px;
    margin: 35px auto;
    background: #fff;
    padding: 15px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  `;
  //   const char = characters.find(character => {
  //     // console.log(`info from SearchedValue: ${char.name}`);
  //     return character.id === props.match.params.id;
  //   });
  return (
    <CardSizing key={searchValue.id}>
      <img width="50%" src={searchValue.image} alt={searchValue.name} />
      <div>
        <h5>
          We are sorry (or pleased) to inform you {searchValue.name}'s status
          is: {searchValue.status}.
        </h5>
        {/* <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink> */}
      </div>
    </CardSizing>
  );
}
