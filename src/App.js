import {useState} from "react"
import Home from "./Routes/Home";
import Inicio from "./Routes/Inicio";
import Image from "./Routes/Image";
import Cande from "./Routes/Cande";
import Candelaria from "./Routes/Candelaria";
import Contact from "./Routes/Contact";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Context} from "./Context/index";
import './App.css';
function App() {

      const [isActive, setActive] = useState(false);

  return (
      <Context.Provider value={[isActive, setActive]}>
    <BrowserRouter>
     <Switch>
      <Route exact path="/">
            <Home />
      </Route>
      <Route exact path="/work">
            <Inicio />
      </Route>
      <Route exact path="/contact">
            <Contact />
      </Route>
      <Route path="/image/:id">
            <Image />
      </Route>
      <Route exact path="/candelaria">
            <Candelaria />
      </Route>
      <Route exact path="/cande">
            <Cande />
      </Route>
       </Switch>
    </BrowserRouter>
    </Context.Provider>
 
  );
}

export default App;
