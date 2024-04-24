import { SearchInput } from "./SearchSection/SearchInput";
import { TrackColumns } from "./TrackColumns/TrackColumns";
import styles from "./SearchTables.module.css";
import { Login } from "./Login/Login";
import { useState } from "react";

function SearchTables() {
    const [accessToken, setAccessToken] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [tracks, setTracks] = useState([]);

    const exampleResponse = [
        {
            song: "Incomprendido",
            artist: "Ismael Rivera",
            album: "Esto fue lo que trajo el barco"
        },
        {
            song: "El Nazareno",
            artist: "Ismael Rivera",
            album: "Esto fue lo que trajo el barco"
        },
        {
            song: "Witnila",
            artist: "Ismael Rivera",
            album: "Esto fue lo que trajo el barco"
        },
        {
            song: "Che Che Olé",
            artist: "Hector Lavoe",
            album: "El Vigilante"
        },
        {
            song: "Idilio",
            artist: "Willie Colon",
            album: "Idilio"
        },
        {
            song: "La vaca lechera",
            artist: "Ismael Rivera",
            album: "Esto fue lo que trajo el barco"
        },
    ]

    return (
        <section className={styles.searchTablesContainer}>
            <Login onChangeAccessToken={setAccessToken} accessToken={accessToken}/>
            <SearchInput accessToken={accessToken} onChangeSearchInput={setSearchInput} searchInput={searchInput} tracks={tracks} onTracksSearched={setTracks}/>
            <TrackColumns tracks={tracks} searchInput={searchInput}/>
        </section>
    )
}

export {SearchTables};