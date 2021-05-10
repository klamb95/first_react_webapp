import logo from './logo.svg';
import './App.css';

function App() {

  const name = "Kieran";
  const age = 25;

  return (
  // JSX 
  <div> 
  <h1 className="title"> Hello, World! </h1>
  <p>This is some text</p>
  <p>My name is {name} and I'm {age > 50 ? "very old" : "really young"}</p>
  </div>
  );
};

export default App;
