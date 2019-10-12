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
import { Link, Route } from "react-router-dom";
import axios from "axios";
import WelcomePage from "./WelcomePage";

export default function SearchForm({ characters, history }) {
  const [searchValueID, setSearchValueID] = useState([]);

  console.log(history);

  const clickHandler = e => {
    console.log(`I was clicked this is my e.target.value: ${e.target.value}`);

    console.log(typeof e.target.value);
    const id = e.target.value;
    return history.push("/");
    // <CardSizing key={id}>
    //   <div>
    //     <h3>{name}</h3>
    //     <h4>{status}</h4>
    //   </div>
    //   <img width="100%" src={imgSrc} alt={imgAlt} />
    //   <div>
    //     <h5>
    //       Meet {name} a {gender} of the {species} species. You can find {name}{" "}
    //       (or what's left of {name}) on {location}.
    //     </h5>
    //     {/* <CardLink href="#">Card Link</CardLink>
    //       <CardLink href="#">Another Link</CardLink> */}
    //   </div>
    // </CardSizing>
  };
  return (
    <section className="search-form">
      <form>
        <select onChange={clickHandler}>
          {characters.map(char => {
            return (
              <option onClick={clickHandler} value={char.id}>
                {char.name}
              </option>
            );
          })}
        </select>
      </form>
    </section>
  );
}
