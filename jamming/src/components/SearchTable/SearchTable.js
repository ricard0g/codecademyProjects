import { useState } from "react";
import { SearchBar } from "../searchBar/SearchBar";
import { TrackColumns } from "../TrackColumns/TrackColumns";
import dotenv from 'dotenv';

dotenv.config(); // Load env variables

function SearchTable() {
	const [search, setSearch] = useState('');
	const [tracks, setTracks] = useState(null);

	return (
		<>
			<SearchBar search={search} onSearchChange={setSearch}/>
			<TrackColumns />
		</>
	);
}

export { SearchTable };
