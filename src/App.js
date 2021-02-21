import {Route,Switch} from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Error from './Error';
import Navigation from './Navigation';
import Search from './Search';

const  App = () => {
  return (
    <div className="App">
    <Navigation />
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/search' component={Search} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
