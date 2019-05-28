import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './components/About';
import Shop from './components/Shop';

const routes = <Switch>
<Route component={Shop} path="/profile/settings" />
<Route component={About} path="/profile/:id" />
<Route render={() => <h1>Home</h1>} path="/" />
<Route render={() => <h1>404 Route Not Found</h1>} />
</Switch>

export default routes