import React from "react";
import './App.css';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Header from "./header";
import MainSection from "./mainSection";
import Footer from "./footer";
import Players from "./players";
import Matches from "./matches-1819";
import Table from "./table";
import SimpleSlider from "./slider";
import Player from "./player";
import Matches_1718 from "./matches_1718";

class Main extends React.Component{

    render() {
        return (
        <div className={"main_container"}>

            <Header/>
            <MainSection>{this.props.children}</MainSection>
            <Footer/>

        </div>)

}
}


class App extends React.Component {
  render() {
    return (
        <Router>
            <div>
                <Main>
                    <Route exact path="/" render={()=>(<SimpleSlider/>)} />
                    <Route path="/team" component={Players}/>
                    <Route path="/matches-1819" component={Matches}/>
                    <Route path="/table" component={Table}/>
                    <Route path="/players/:player_id" component={Player}/>
                    <Route path="/matches-1718" component={Matches_1718}/>
                </Main>
            </div>
        </Router>
    );
  }
}

export default App;
