import './App.css';
import Bike from './Bike';
import Boat from './Boat';
import Car from './Car';
import colors from './colors';

function App() {
  return (
    <div className="App">
    <Car color='red' />
    <Boat color='blue' />
    <Bike collor={colors}/>
    </div>
  );
}


export default App;
