import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(result => {
        console.log(result.data);
        setCharacters(result.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // console.log(characters);
  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {characters.map(char => {
        console.log(char);
        return (
          <div key={char.id}>
            <CharacterCard
              id={char.id}
              name={char.name}
              orgin={char.origin.name}
              location={char.location.name}
              status={char.status}
              species={char.species}
              type={char.type}
              gender={char.gender}
              imgSrc={char.image}
              imgAlt={char.name}
            />
            {/* <p>id: {char.id}</p>
        <p>name: {char.name}</p>
        <p>origin: {char.origin.name}</p>
        <p>location: {char.location.name}</p>
        <p>status: {char.status}</p>
        <p>species: {char.species}</p>
        <p>type: {char.type}</p>
        <p>gender: {char.gender}</p>
        <img src={char.image} alt={char.name}/> */}
          </div>
        );
      })}
    </section>
  );
}
