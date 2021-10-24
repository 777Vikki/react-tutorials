import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About';
function App() {
  return (
    <>
      <Router>
        <Navbar title="TextUtils"/>
        <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter the text to analyze below"/>
          </Route>
        </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
