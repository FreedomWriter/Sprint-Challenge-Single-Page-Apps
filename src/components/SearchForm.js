import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import SearchedValue from "./SearchedValue";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";

export default function SearchForm({ characters, history, match }) {
  const [searchValue, setSearchValueID] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  function toggle() {
    setDropDownOpen(!dropDownOpen);
  }

  const ButtonSpacing = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1.5%;
  `;

  const clickHandler = e => {
    const sel = parseInt(e.target.value) - 1;
    setSearchValueID(characters[sel]);
    setShowContent(true);
  };

  const clickHandlerClear = () => setShowContent(false);

  return (
    <div>
      <ButtonSpacing>
        <Link to="/">
          <Button color="secondary">Home</Button>
        </Link>
        <Dropdown isOpen={dropDownOpen} toggle={toggle}>
          <DropdownToggle caret>Is Your Fav Dead or Alive?</DropdownToggle>
          <DropdownMenu right>
            {characters.map(char => {
              return (
                <DropdownItem
                  name="char"
                  onClick={clickHandler}
                  value={char.id}
                  key={char.id}
                >
                  {char.name}
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      </ButtonSpacing>
      {showContent ? (
        <div>
          <Route
            path="/"
            render={props => {
              return (
                <SearchedValue
                  {...props}
                  characters={characters}
                  searchValue={searchValue}
                  clickHandlerClear={clickHandlerClear}
                />
              );
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
