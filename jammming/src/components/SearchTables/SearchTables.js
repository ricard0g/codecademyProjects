import { SearchInput } from "./SearchSection/SearchInput";
import { TrackColumns } from "./TrackColumns/TrackColumns";
import styles from "./SearchTables.module.css";

function SearchTables() {
    return (
        <section className={styles.searchTablesContainer}>
            <SearchInput />
            <TrackColumns />
        </section>
    )
}

export {SearchTables};