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
import React, { useState } from "react";
import { Formik, Form, Field, withFormik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";

function SearchForm({ characters }) {
  console.log(characters);

  const handleSubmit = e => {
    console.log(e.target.value);
  };
  return (
    <section className="search-form">
      <Formik>
        <Form onSubmit={handleSubmit}>
          <Field
            name="searchName"
            component="select"
            placeholder="Find Your Fav"
          >
            {characters.map(char => {
              return <option value={char.name}>{char.name}</option>;
            })}
          </Field>
        </Form>
      </Formik>
    </section>
  );
}

export default withFormik({
  mapPropsToValues({ characters }) {
    return {
      id: characters.id || "",
      name: characters.name || "",
      location: characters.location || "",
      status: characters.status || "",
      species: characters.species || "",
      gender: characters.gender || "",
      imgSrc: characters.imgSrc || "",
      imgAlt: characters.imgAlt || ""
    };
  },
  handleSubmit(values, { setStatus, resetForm }) {
    console.log(values);
    axios
      .get(`https://rickandmortyapi.com/api/character/${values.id}`)
      .then(result => {
        console.log(result.data);
        setStatus(result.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }
})(SearchForm);
// <option value="red">Red</option>
// <option value="green">Green</option>
// <option value="blue">Blue</option>
