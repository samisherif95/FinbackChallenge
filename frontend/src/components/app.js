import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './main/main_page_container';


const App = () => (
    <div>
         <Route exact path="/" component={MainPage} />
    </div>
);

export default App;