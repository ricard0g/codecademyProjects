import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
	return (
		<div className="searchBarContainer">
			<input type="text" className="searchBarInput font" placeholder="Search a Song" />
			<button type="submit" className="buttonSearch font">Search</button>
		</div>
	);
}

export { SearchBar };