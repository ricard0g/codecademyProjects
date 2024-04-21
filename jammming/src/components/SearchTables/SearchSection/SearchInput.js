import styles from "./SearchInput.module.css";

// Spotify API URL and Query Params
let endpoint = 'https://api.spotify.com/v1/search';
let typeParam = "track";
let limitParam = "limit=10"

function SearchInput({ accessToken, onChangeSearchInput, searchInput }) {
    console.log(searchInput);

	const handleSearchChange = (e) => {
		onChangeSearchInput(e.target.value);
        endpoint += "?";
        endpoint += `q=${searchInput}&`;
        endpoint += `type=${typeParam}&`;
        endpoint += `${limitParam}`;
	};
    console.log(endpoint);
    
	const handleSubmit = async () => {
        try {
            const response = await fetch(endpoint, {
                method: "GET",
                headers: {
                    "Authorization": " Bearer " + ` ${accessToken} `
                }
            });
    
            if(response.ok){
                const jsonResponse = await response.json();
                console.log(`Response went fine!\n\nThis is the entire response:\n\n${jsonResponse}`);
            }
        } catch (error) {
            console.log(error);
        }
	};

	return (
		<div className={styles.searchInputContainer}>
			<input
				type="text"
				placeholder="Search Track"
				className={styles.inputSearch}
				onChange={handleSearchChange}
			/>
			<button type="submit" className={styles.searchButton} onSubmit={handleSubmit}>
				Search
			</button>
		</div>
	);
}

export { SearchInput };
