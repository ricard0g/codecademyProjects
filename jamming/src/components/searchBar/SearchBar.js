import "./SearchBar.css";

// endpoint API
const baseUrl = "https://api.spotify.com";

function SearchBar(props) {

	const handleSubmit = (e) => {
		props.onSearchChange(e.target.value);

	}

	return (
		<div className="searchBarContainer">
			<input
				type="text"
				className="searchBarInput font"
				placeholder="Search a Song"
				value={props.search}
			/>
			<button type="submit" className="buttonSearch font">
				Search
			</button>
		</div>
	);
}

export { SearchBar };
