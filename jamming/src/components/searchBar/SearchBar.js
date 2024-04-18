import "./SearchBar.css";

// Base URL and enpoint API.
// Wrote them seperately just for learning and better understanding on how everything works when it comes to APIs. I know and later will write them together
const baseUrl = "https://api.spotify.com";
const endpoint = "/v1/tracks";

function SearchBar(props) {
	const fullEndpoint = baseUrl + endpoint;

	const handleSubmit = (e) => {
		props.onSearchChange(e.target.value);
		const getTracks = async () => {
			try {
				const response = await fetch(fullEndpoint, )
			} catch(error) {

			}
		}
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
