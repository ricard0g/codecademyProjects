import styles from "./LeftColumn.module.css";

function LeftColumn(props) {
	let exampleTracks = [
		{
			artist: "Ismael Rivera",
			song: "Incomprendido",
		},
		{
			artist: "Ismael Rivera",
			song: "El Nazareno",
		},
		{
			artist: "Willie Colon",
			song: "Idilio",
		},
		{
			artist: "Hector Lavoe",
			song: "Hacha y Machete",
		},
	];

	return (
		<div className={styles.leftColumnContainer}>
			<h2>Results</h2>
			<ul>
				{exampleTracks.map((track) => (
					<li>
						<h3>{track.song}<button className={styles.addButton}>+</button></h3>
						<p>{track.artist}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export { LeftColumn };
