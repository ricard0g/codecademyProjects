import styles from './SearchInput.module.css';

function SearchInput() {
    return (
        <div className={styles.searchInputContainer}>
            <input type="text" placeholder='Search Track' className={styles.inputSearch}/>
            <button type="submit">Search</button>
        </div>
    )
}

export {SearchInput};