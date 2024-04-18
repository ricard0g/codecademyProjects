import { useState } from "react";
import { SearchBar } from "../searchBar/SearchBar";
import { TrackColumns } from "../TrackColumns/TrackColumns";
import dotenv from 'dotenv';

dotenv.config(); // Load env variables

function SearchTable() {
	

	return (
		<>
			<SearchBar />
			<TrackColumns />
		</>
	);
}

export { SearchTable };
