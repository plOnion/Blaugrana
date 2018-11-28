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
import Matches from "./matches";
import Table from "./table";
import SimpleSlider from "./slider";
import Player from "./player";

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
                    <Route path="/matches" component={Matches}/>
                    <Route path="/table" component={Table}/>
                    <Route path="/players/:player_id" component={Player}/>
                </Main>
            </div>
        </Router>
    );
  }
}

export default App;
