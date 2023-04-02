import "./App.css";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Graph from "./Pages/dashboard"
import MyComponent from "./Pages/progress";
function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Graph/>
     <MyComponent/>
      {/* <SignUp /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
