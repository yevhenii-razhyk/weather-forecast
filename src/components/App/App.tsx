import './App.scss';
import Search from '../Search/Search';
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import Forecast from '../Forecast/Forecast';

const App: React.FC = () => { 

  return (
    <div className="wrapper">
      <Search/>
      <CurrentWeather/>
      <Forecast/>
    </div>
  );
}

export default App;
