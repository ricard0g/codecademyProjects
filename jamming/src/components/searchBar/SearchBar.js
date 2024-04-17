import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
	return (
		<div className="searchBarContainer">
			<input type="text" className="searchBarInput" />
			<button type="submit" className="buttonSearch">Search</button>
		</div>
	);
}

export { SearchBar };