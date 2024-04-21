import styles from "./SearchInput.module.css";

// Spotify API URLs
const fullEndpoint = 'https://api.spotify.com/v1/search';

function SearchInput({ accessToken, onChangeSearchInput, searchInput }) {
    const q = undefined;
    
	const handleSearchChange = (e) => {
		onChangeSearchInput(e.target.value);
	};

	const handleSubmit = async () => {
		fetch();
	};

	return (
		<div className={styles.searchInputContainer}>
			<input
				type="text"
				placeholder="Search Track"
				className={styles.inputSearch}
				onSearchInputChange={handleSearchChange}
			/>
			<button type="submit" className={styles.searchButton}>
				Search
			</button>
		</div>
	);
}

export { SearchInput };
