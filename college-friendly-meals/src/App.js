import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://assets.zenn.com/strapi_assets/food_logo_5fbb88038c.png'} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <p>Welcome to College Friendly Meals</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Cook!
        </a>
      </header>
    </div>
  );
}

export default App;
