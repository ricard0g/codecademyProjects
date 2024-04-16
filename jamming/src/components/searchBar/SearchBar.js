import { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
	const [userInput, setUserInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserInput(e.target.value);
    }

	return (
		<div className="searchBarContainer">
			<input type="text" value={userInput} className="searchBarInput" onChange={handleSubmit}/>
			<button type="submit" className="buttonSearch">Search</button>
		</div>
	);
}

export { SearchBar };