import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    const url = `https://rick-api.herokuapp.com/api/character`;
    axios
      .get(proxy + url)
      .then(result => {
        console.log(result.data.results);
        setCharacters(result.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const submitHandler = () => {};

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <Route
        path="/characters"
        render={props => (
          <SearchForm
            history={props.history}
            match={props.match}
            onSubmit={submitHandler}
            characters={characters}
          />
        )}
      />

      {characters.map(char => {
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
          </div>
        );
      })}
    </section>
  );
}
