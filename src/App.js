import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header/Header.jsx';
import {Counter} from './components/Counter/Counter.jsx'

function App() {
  return (
    <div className="App">
      <div>
        {/* <Header /> */}
        <Counter />
      </div>
    </div>
  );
}

export default App;