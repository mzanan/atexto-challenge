import React from "react";
import { AppBar, Toolbar } from "@material-ui/core/";
import SearchBar from "material-ui-search-bar";

import "../styles/NavBar.css";
import OrderComponent from "./OrderComponent";

function NavBar(props) {
  return (
    <div>
      <AppBar>
        <Toolbar className="toolbar">
          <div className="toolbar__container">
            <SearchBar
              className="toolbar__searchBar"
              onChange={props.onSearch}
            />
            <OrderComponent {...props} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
