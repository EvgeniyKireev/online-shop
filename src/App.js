import './App.css';
import {Route} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Mainpage from "./components/Mainpage";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
     <NavigationBar />

        <Route path={'/products'} render={() => <Products/>}/>
      <Route path={'/'} exact render={()=> <Mainpage />}/>
    </div>
  );
}

export default App;
