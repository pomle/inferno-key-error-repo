import { version } from 'inferno';
import Component from 'inferno-component';
import { List } from 'immutable';
import './registerServiceWorker';
import Logo from './logo';
import './App.css';

class App extends Component {
  render() {
    const items = new List(['a', 'b', 'c']);

    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80" />
          <h2>{`Welcome to Inferno ${version}`}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        { items.map(item => <span/>) }
      </div>
    );
  }
}

export default App;
