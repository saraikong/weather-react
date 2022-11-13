import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div>
        <Weather defaultCity="New York" />
      </div>
    </div>
  );
}
