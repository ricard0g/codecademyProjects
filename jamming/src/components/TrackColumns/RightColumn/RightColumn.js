import styles from "./RightColumn.module.css";

function RightColumn(props) {
    return (
        <div className={styles.rightColumnContainer}>
            <input type="text" className={styles.playlistNameInput}/>
            <button type="submit" className={styles.playlistAddButton}>Save To Spotify</button>
        </div>
    )
}

export { RightColumn };