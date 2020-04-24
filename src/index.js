import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About';
import Home from './components/Home';
import FavoriteThings from './components/FavoriteThings';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/favoritethings'>Favorite Things</Link>
                    </li>
                </ul>
                <hr />

                <Route exact path='/' component={Home} />
                <Route path='/about' component ={About} />
                <Route path='/favoritethings' component={FavoriteThings} />

            </div>
        </Router>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
