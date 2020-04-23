import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
            </div>
        </Router>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
