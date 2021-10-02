import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DcScreen } from '../components/Dc/DcScreen';
import { HeroScreen } from '../components/Heroes/HeroScreen';
import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { SearchScreen } from '../components/Search/SearchScreen';
import { Navbar } from '../components/Ui/NavBar';

export const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">

        <Switch >
          <Route exact path="/marvel" component={ MarvelScreen } />
          <Route exact path="/heroe/:heroeId" component={ HeroScreen } />
          <Route exact path="/dc" component={ DcScreen } />
          <Route exact path="/search" component={ SearchScreen } />

        </Switch>

      </div>
    </>
  )
}
