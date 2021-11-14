import { Pelicula } from "../components/peliculas/Pelicula";

import { Peliculas } from '../components/peliculas/Peliculas';
import { Footer } from '../components/ui/Footer';
import { Header } from '../components/ui/Header';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export const AppRouter = () => {
    return (
        <>
            <Header />

            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={ Peliculas } />
                        <Route exact path="/pelicula/:nombreURL" component={ Pelicula } />

                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>

            <Footer />
        </>
    )
}
