import logo from './logo.svg';
import './App.css';
import { Banner } from './components/banner/banner';
import { SearchBar } from './components/searchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
      </header>
      <main className="App-main">
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
