import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Home from './Home';
import HeroPowerForm from './HeroPowerForm';
import Power from './Power';
import PowerEditForm from './PowerEditForm';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [powers, setPowers] = useState([]);

  useEffect(() => {
    fetch('/heroes')
      .then((response) => response.json())
      .then((data) => setHeroes(data));

    fetch('/powers')
      .then((response) => response.json())
      .then((data) => setPowers(data));
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/hero_powers/new">
            <HeroPowerForm />
          </Route>
          <Route exact path="/powers/:id/edit">
            <PowerEditForm powers={powers} />
          </Route>
          <Route exact path="/powers/:id">
            <Power powers={powers} />
          </Route>
          <Route exact path="/heroes/:id">
            <Hero heroes={heroes} />
          </Route>
          <Route exact path="/">
            <Home heroes={heroes} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
