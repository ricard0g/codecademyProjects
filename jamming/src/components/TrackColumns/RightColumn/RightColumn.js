import styles from "./RightColumn.module.css";

function RightColumn(props) {
    return (
        <div className={styles.rightColumnContainer}>
            <input type="text" className={styles.playlistNameInput}/>
            <button type="submit">Save To Spotify</button>
        </div>
    )
}

export { RightColumn };