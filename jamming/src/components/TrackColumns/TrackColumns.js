import styles from "./TrackColumns.module.css";
import { LeftColumn } from "./LeftColumn/LeftColumn";
import { RightColumn } from "./RightColumn/RightColumn";

function TrackColumns(props) {
	return (
		<div className={styles.trackColumnsContainer}>
			<LeftColumn />
			<RightColumn />
		</div>
	);
}

export { TrackColumns };
