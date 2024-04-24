import { useState } from "react";
import styles from "./SearchInput.module.css";

// Spotify API URL and Query Params
let endpoint = "https://api.spotify.com/v1/search";
let typeParam = "track";
let limitParam = "limit=10";

function SearchInput({
	accessToken,
	onChangeSearchInput,
	searchInput,
	tracks,
	onTracksSearched,
}) {
	const [errorMessage, setErrorMessage] = useState(false);

	// Callback function that will be saving the values entered by the user, changing the state variable of searchInput
	const handleSearchChange = (e) => {
		onChangeSearchInput(e.target.value);
	};
	console.log(searchInput);

	// This callback makes the API call and the building of the endpoint needed to make the call
	const handleSubmit = async () => {
		try {
			if(searchInput.length === 0){
				alert("You have to provide a song name or part of it");
				return null;
			}

			// Build the endpoint with the query params and the search input gotten from the user
			endpoint += "?";
			endpoint += `q=${searchInput}&`;
			endpoint += `type=${typeParam}&`;
			endpoint += `${limitParam}`;

			console.log(endpoint);
			console.log(accessToken);

			const response = await fetch(endpoint, {
				method: "GET",
				headers: {
					Authorization: " Bearer " + ` ${accessToken} `,
				},
			});

			console.log(response);

			if (response.ok) {
				const jsonResponse = await response.json();
				console.log(jsonResponse.tracks.artists.name);
				endpoint = "https://api.spotify.com/v1/search";
				onTracksSearched(jsonResponse);
				console.log(tracks);
				console.log(typeof tracks);
			}

			// Create error handling logic, I think it should actually be inside the Catch codeblock
			// if (response.error) {

			// }
		} catch (error) {
			setErrorMessage(true);
			console.log(error);
		}
	};

	return (
		<div className={styles.searchInputContainer}>
			{errorMessage ? (
				<div>
					<p className={styles.errorMessage}>
						Make sure to Log In to your Spotify Account
					</p>
				</div>
			) : null}
			<input
				type="text"
				placeholder="Search Track"
				className={styles.inputSearch}
				onChange={handleSearchChange}
			/>
			<button
				type="submit"
				className={styles.searchButton}
				onClick={handleSubmit}
			>
				Search
			</button>
		</div>
	);
}

export { SearchInput };
