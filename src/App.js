import './App.css';
import NavBar from './components/NavBar';
import TvShows from './components/TvShows';
import Slide from './components/Slide';
import Originals from './components/Originals';
import Games from './components/Games';
import Premium from './components/Premium';
import Movies from './components/Movies';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home';
import Sports from './components/Sports';
import Footer from './components/Footer';
import TvShowsList from './components/TvShowsList';
import GamesList from './components/GamesList';
import OriginalsList from './components/OriginalsList';
import SportsList from './components/SportsList';
import PremiumList from './components/PremiumList';
import MoviesList from './components/MoviesList';
import Signin from './Login/SignIn';
import SignUp from './Login/SignUp';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
          <Switch>
          <Route path="/" exact render={() => <><Slide/><Home/></>} />
          <Route path="/tvshows" exact render={() => <><Slide/><TvShows/></>} />
          <Route path="/originals" exact render={() => <><Slide/><Originals/></>} />
          <Route path="/sports" exact render={() => <><Slide/><Sports/></>} />
          <Route path="/movies" exact render={() => <><Slide/><Movies/></>} />
          <Route path="/premium" exact render={() => <><Slide/><Premium/></>} />
          <Route path="/games" exact render={() => <><Slide/><Games/></>} />
          <Route path="/details"  component={Details} />
          <Route path="/tvshowslist"  component={TvShowsList} />
          <Route path="/originalslist"  component={OriginalsList} />
          <Route path="/sportslist"  component={SportsList} />
          <Route path="/movieslist"  component={MoviesList} />
          <Route path="/premiumlist"  component={PremiumList} />
          <Route path="/gameslist"  component={GamesList} />
          <Route path="/signin"  component={Signin} />
          <Route path="/signup"  component={SignUp} />
          
          </Switch>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
