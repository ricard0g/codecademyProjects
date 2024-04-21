import styles from './SearchInput.module.css';

function SearchInput({onChangeSearchInput}) {
    return (
        <div className={styles.searchInputContainer}>
            <input type="text" placeholder='Search Track' className={styles.inputSearch}/>
            <button type="submit" className={styles.searchButton}>Search</button>
        </div>
    )
}

export {SearchInput};