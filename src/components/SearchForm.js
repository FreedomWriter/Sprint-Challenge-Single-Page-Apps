// import React, { useState } from "react";

// export default function SearchForm({
//   id,
//   name,
//   origin,
//   location,
//   status,
//   species,
//   gender
// }) {
//   const [search, setSearch] = useState("");
//   const [results, setResults] = useState([]);

//   const handleChange = e => {
//     setSearch(e.target.value);
//     console.log(search);
//   };

//   const callSearchFn = search => {
//     search === name.includes(search)
//       ? console.log(`You searched for ${name}`)
//       : console.log(`no luck`);
//   };

//   return (
//     <form className="search-form">
//       <input value={search} onChange={handleChange} type="text" />
//       <input onClick={callSearchFn} type="submit" />
//     </form>
//   );
// }

// //another attempt
// import React, { useState } from "react";
// import { Formik, Form, Field, withFormik } from "formik";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function SearchForm({ characters }) {
//   console.log(characters);

//   const handleSubmit = e => {
//     console.log(e.target.value);
//   };
//   return (
//     <section className="search-form">
//       {/* <Formik> */}
//       <Form onSubmit={handleSubmit}>
//         <Field name="searchName" component="select" placeholder="Find Your Fav">
//           {characters.map(char => {
//             return <option value={char.name}>{char.name}</option>;
//           })}
//         </Field>
//       </Form>
//       {/* </Formik> */}
//     </section>
//   );
// }

// export default withFormik({
//   mapPropsToValues({ characters }) {
//     return {
//       id: characters.id || "",
//       name: characters.name || "",
//       location: characters.location || "",
//       status: characters.status || "",
//       species: characters.species || "",
//       gender: characters.gender || "",
//       imgSrc: characters.imgSrc || "",
//       imgAlt: characters.imgAlt || ""
//     };
//   },
//   // handleSubmit(values, { setStatus, resetForm }) {
//   //   console.log(values);
//   //   axios
//   //     .get(`https://rickandmortyapi.com/api/character/${values.id}`)
//   //     .then(result => {
//   //       console.log(result.data);
//   //       setStatus(result.data.results);
//   //     })
//   //     .catch(err => {
//   //       console.log(err);
//   //     });
//   // }
//   handleSubmit(values) {
//     console.log(values);
//     //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
//   }
// })(SearchForm);

//another attempt
import React, { useState, useEffect } from "react";
// import { Formik, Form, Field, withFormik } from "formik";
import { Route } from "react-router-dom";
import styled from "styled-components";
import SearchedValue from "./SearchedValue";

export default function SearchForm({ characters, history, match }) {
  const [searchValue, setSearchValueID] = useState([]);
  // const [favSelected, setFavSelected] = useState(false);
  const [hidden, setHidden] = useState(false);

  console.log(history);
  console.log(match);

  const CardSizing = styled.div`
    width: 75%;
    display: flex;
    flex-flow: row wrap;
    // margin: 30% auto;
    margin-left: 40%;
    jusifty-content: flex-end;
  `;

  const Hide = styled.div`
    display: hidden;
  `;

  const clickHandler = e => {
    console.log(`I was clicked this is my e.target.value: ${e.target.value}`);

    console.log(typeof e.target.value);
    const sel = parseInt(e.target.value) - 1;
    console.log(characters[sel]);
    setSearchValueID(characters[sel]);
    console.log(searchValue.name);
    console.log(characters[sel].name);
    // history.pop("/characters");
    // history.push("/character/status");
  };

  console.log(searchValue);
  // console.log(favSelected);
  return (
    <div>
      <section className="search-form">
        <form>
          <CardSizing>
            <label htmlFor="char">Dead or Alive?</label>
            <select onChange={clickHandler}>
              {characters.map(char => {
                return (
                  <option name="char" onClick={clickHandler} value={char.id}>
                    {char.name}
                  </option>
                );
              })}
            </select>
          </CardSizing>
        </form>
      </section>
      <Route
        path="/"
        render={props => {
          return (
            <SearchedValue
              {...props}
              characters={characters}
              searchValue={searchValue}
            />
          );
        }}
      />
    </div>
  );
}
