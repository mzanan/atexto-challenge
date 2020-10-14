import React from "react";
import { AppBar, Toolbar } from "@material-ui/core/";
import SearchBar from "material-ui-search-bar";

import "../styles/NavBar.css";
import FormControl from "./FormControl";

function NavBar(props) {
  return (
    <div>
      <AppBar >
        <Toolbar className="toolbar">
          <div className="toolbar__container">
            <SearchBar
              className="toolbar__searchBar"
              onChange={props.onSearch}
            />
            <FormControl />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
