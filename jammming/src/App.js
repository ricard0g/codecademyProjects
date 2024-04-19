import logo from './logo.svg';
import {Banner} from './components/Banner/Banner';
import { SearchTables } from './components/SearchTables/SearchTables';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
      </header>
      <main className="App-main">
        <SearchTables />
      </main>
    </div>
  );
}

export default App;
