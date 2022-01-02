import React from 'react'
import { BrowserRouter,Switch,Route } from "react-router-dom"
import { TopMovies } from '../Pages/Movies';
import { Home } from "../Pages/Home";
import { UpCommingMovies } from '../Pages/UpCommingMovies';
import { MoveInfo } from '../components/MoveInfor';
import { Favorites } from '../components/Favorite';
import { TvShows } from '../Pages/TvSeries';
import { SeriesInfo } from '../components/SeriesInfo';

function Routes() {

    return (
        <>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/top&movies" component={TopMovies} />
            <Route path="/tvshows" component={TvShows} />
            <Route path="/upcomming&movies" component={UpCommingMovies} />
            <Route path="/movie&info" component={MoveInfo} />
            <Route path="/series&info" component={SeriesInfo} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </BrowserRouter>
        </>
    )

}

export default Routes;
