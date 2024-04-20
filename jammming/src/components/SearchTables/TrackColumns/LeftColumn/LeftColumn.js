import styles from './LeftColumn.module.css';

function LeftColumn(props) {
    return (
        <div className={styles.leftColumnContainer}>
            <h2 className={styles.resultsTitle}>Results</h2>
            <ul>
                {props.tracks.map((track) => {
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