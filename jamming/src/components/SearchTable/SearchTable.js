import { useEffect, useState } from "react";
import { SearchBar } from "../searchBar/SearchBar";
import { TrackColumns } from "../TrackColumns/TrackColumns";
import dotenv from 'dotenv';

dotenv.config(); // Load env variables

// Access Token endpoint
const tokenEndpoint = "https://accounts.spotify.com/api/token";

function SearchTable() {
	const [search, setSearch] = useState('');
	const [tracks, setTracks] = useState(null);
	const [accessToken, setAccessToken] = useState(null);

	const getAccessToken = async () => {
		try {
			if(!accessToken){
				const response = await fetch(tokenEndpoint, {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					body: `grant_type=client_credentials&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
				});

				if(response.ok){
					console.log(`Api call made succesfully!`)
					const jsonResponse = await response.json();
					
					console.log(jsonResponse);

					setAccessToken(jsonResponse["access_token"]);
				}
			}
		} catch(error) {
			console.log(error);
		}

	} 

	useEffect(getAccessToken);

	return (
		<>
			<SearchBar search={search} onSearchChange={setSearch} />
			<TrackColumns />
		</>
	);
}

export { SearchTable };
