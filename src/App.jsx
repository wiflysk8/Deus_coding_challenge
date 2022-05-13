import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import BeerContextProvider from "./shared/contexts/BeerContext";
import RoutesFile from "./core/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <BeerContextProvider>
          <RoutesFile />
        </BeerContextProvider>
      </Router>
    </div>
  );
}

export default App;
