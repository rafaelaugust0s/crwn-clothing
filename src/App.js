
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Switch} from 'react-router-dom';



const HatsPage = () =>(

    <div> HATS PAGE</div>
);

function App() {
  return (
      <div>
          <Switch>
              <Route  exact path='/' component={HomePage}/>
              <Route  path='/hats' component={HatsPage}/>
          </Switch>


      </div>
  );

}

export default App;
