import logo from './logo.svg';
import './App.css';
import { Banner } from './components/banner/banner';
import { SearchBar } from './components/searchBar/SearchBar';
import { SearchTable } from './components/SearchTable/SearchTable';
import styles from './global.module.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
      </header>
      <main className="App-main">
        <SearchTable />
      </main>
    </div>
  );
}

export default App;
