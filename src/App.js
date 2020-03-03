import React from 'react';

import Header from "./components/header";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Vote from "./pages/Vote";
import Nominations from "./pages/Nominations";
import PastWinners from "./pages/past-winners";
import Footer from "./components/footer";

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{fontFamily: 'Nunito, sans-serif'}}>
        <Router>
        <Header/>
        <main>
                <Switch>
                    <Route exact path="/" >
                        <Home />
                    </Route>
                    <Route exact path="/about" >
                        <About />
                    </Route>
                    <Route exact path="/news" >
                        <News />
                    </Route>
                    <Route exact path="/vote" >
                        <Vote />
                    </Route>
                    <Route exact path="/nominations" >
                        <Nominations />
                    </Route>
                    <Route exact path="/past-winners" >
                        <PastWinners />
                    </Route>
                </Switch>
        </main>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
