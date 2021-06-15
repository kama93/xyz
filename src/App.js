import './App.css';
import MainPage from './mainPage';
import DetailPage from './detailGame'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/detail/:id" component={DetailPage} />
    </Switch>
  );
}

export default App;
