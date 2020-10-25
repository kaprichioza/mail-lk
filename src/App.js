import './App.css';
import { Navigation } from './components/navigation/navigation';
import { Main } from './components/main/main';
import { Content } from './components/content/content';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Content />
    </div>
  );
}

export default App;
