import './App.css';
import Background from './components/background';
import TopBar from './components/TopBar';
import StoreListings from './components/StoreListings';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <Background/>
      <StoreListings/>
    </div>
  );
}

export default App;
