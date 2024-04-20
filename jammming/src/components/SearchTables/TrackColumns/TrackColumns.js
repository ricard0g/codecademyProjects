import { LeftColumn } from "./LeftColumn/LeftColumn";
import { RightColumn } from "./RightColumn/RightColumn";
import styles from "./TrackColumns.module.css";

function TrackColumns(props) {
    return (
        <div className={styles.trackColumnContainer}>
            <LeftColumn tracks={props.tracks}/>
            <RightColumn />
        </div>
    )
}

export {TrackColumns};