import { useState } from "react";
import { SearchBar } from "../searchBar/SearchBar";
import { TrackColumns } from "../TrackColumns/TrackColumns";

function SearchTable() {
	return (
		<>
			<SearchBar />
			<TrackColumns />
		</>
	);
}

export { SearchTable };
