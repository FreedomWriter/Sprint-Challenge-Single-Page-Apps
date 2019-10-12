import React from "react";
import styled from "styled-components";

export default function CharacterCard({
  id,
  name,
  location,
  status,
  species,
  gender,
  imgSrc,
  imgAlt
}) {
  const CardSizing = styled.div`
    width: 75%;
    display: flex;
    flex-flow: row wrap;
    border: 1px solid lightgrey;
    margin: 3% auto;
    align-content: center;
    width: 50vw;
    min-height: 50vh;
    max-width: 1024px;
    margin: 35px auto;
    background: #fff;
    padding: 15px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  `;
  return (
    <CardSizing key={id}>
      <div>
        <h3>{name}</h3>
        <h4>{status}</h4>
      </div>
      <img width="100%" src={imgSrc} alt={imgAlt} />
      <div>
        <h5>
          Meet {name} a {gender} of the {species} species. You can find {name}{" "}
          (or what's left of {name}) on {location}.
        </h5>
        {/* <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink> */}
      </div>
    </CardSizing>
  );
}
