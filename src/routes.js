import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Scriptures from './pages/Scriptures';
import DescriptionBook from './pages/DescriptionBook';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <ScrollToTop>
          <Route path="/" exact component={Home} />
          <Route path="/:version/:book" exact component={DescriptionBook} />
          <Route path="/:version/:book/:chapter" exact component={Scriptures} />
        </ScrollToTop>
      </Switch>
    </BrowserRouter>
  )
}