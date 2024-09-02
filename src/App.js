import './App.css';
import DashboardContainer from './components/DashboardContainer';
import { DashboardProvider } from './context/Context';

function App() {
  return (
    <DashboardProvider>

    <div className="App">
      <DashboardContainer />
    </div>
    </DashboardProvider>
  );
}

export default App;
