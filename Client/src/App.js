
import './App.css';
import Body from './components/body/Body';
import {plantListes} from './plantList'
function App() {
  return (
    <div className="App">
        <Body data = {plantListes} />
    </div>
  );
}

export default App;
