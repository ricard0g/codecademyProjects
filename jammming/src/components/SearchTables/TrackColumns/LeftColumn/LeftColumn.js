import styles from './LeftColumn.module.css';

function LeftColumn() {
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
        <div className={styles.leftColumnContainer}>
            <h2 className={styles.resultsTitle}>Results</h2>
            <ul>
                {exampleResponse.map((track) => {
                    return (
                        <li>
                            <p className={styles.songName}>{track.song}<button className={styles.addButton}>+</button></p>
                            <p className={styles.artistAndAlbum}>{track.artist} | {track.album}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export {LeftColumn};