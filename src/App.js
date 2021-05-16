
import './App.css';

import WeatherBox from "./WeatherBox";
import Temperature from "./Temperature";
import WeatherInfo from "./WeatherInfo";
import Form from "./Form";
import Time from "./Time";



function App() {
  return (
    <div className="App">
      <Form />
      <Time time="Sun 10:00" />
      <WeatherBox
        city="California"
        description="Sunny"
        icon="https://png.pngtree.com/png-vector/20190629/ourmid/pngtree-sun-icon-design-png-image_1518941.jpg"
      />
      <Temperature temp={16} />
      <WeatherInfo humidity="80" wind="15" precipitation="20" />
    </div>
  );
}

export default App;
