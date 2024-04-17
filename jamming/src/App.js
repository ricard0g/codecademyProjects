import logo from './logo.svg';
import './App.css';
import { Banner } from './components/banner/banner';
import { SearchTable } from './components/SearchTable/SearchTable';

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
