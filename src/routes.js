import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Feed from './pages/Feed.js';
import New from './pages/New.js';

function Routes(){
    return(
        <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/new" component={New} />
        </Switch>
    );
}

export default Routes;