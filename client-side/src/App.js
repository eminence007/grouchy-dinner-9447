import "./App.css";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import AllRoutes from "./AllRoutes/AllRoutes";

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <SignUp /> */}
      {/* <Login /> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
