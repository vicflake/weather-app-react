
import './App.css';

import WeatherBox from "./WeatherBox";




function App() {
  return (
    <div>
      <div className="App">
        <WeatherBox defaultCity="California"/>
      </div>
      <footer>
        <a href="https://github.com/vicflake/weather-app-react" target="_blank" rel="noreferrer">Open-source</a>
        <span> by Victoria Moreno and hosted on <a href="https://jolly-roentgen-e13ceb.netlify.app" alt="Netlify link">Netlify</a></span> 
      </footer>
    </div>
  );
}

export default App;
