import { LeftColumn } from "./LeftColumn/LeftColumn";
import { RightColumn } from "./RightColumn/RightColumn";
import styles from "./TrackColumns.module.css";

function TrackColumns() {
    return (
        <div className={styles.trackColumnContainer}>
            <LeftColumn />
            <RightColumn />
        </div>
    )
}

export {TrackColumns};