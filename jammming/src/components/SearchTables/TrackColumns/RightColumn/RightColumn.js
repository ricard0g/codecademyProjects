import styles from "./RightColumn.module.css";

function RightColumn() {
    return (
        <div className={styles.rightColumnContainer}>
            <input type="text" placeholder="Playlist Title" className={styles.playlistNameInput}/>
            <button type="submit" className={styles.savePlaylistButton}>Save Playlist</button>
        </div>
    )
}

export {RightColumn};