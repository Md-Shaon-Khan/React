import ClockHeading from "./components/ClockHeading";
import MotoClock from "./components/MotoClock";
import ShowTime from "./components/ShowTime";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="clock-container">
      <ClockHeading />
      <MotoClock />
      <ShowTime />
    </div>
  );
}

export default App;
