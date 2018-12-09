import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

class Matches extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: false,
        };
    }


    componentDidMount() {

        let APIkey = "49aee847dedc17cd8822be90f12e356b6886792a719630d7a9a0b256b5bfd1d1";

        fetch(`https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${APIkey}&from=2018-08-01&to=2019-06-01&leagueId=468`)
            .then(resp => {
                if (resp.ok)
                    return resp.json();
                else
                    throw new Error("Błąd sieci");
            })
            .then(data => {
                this.setState({
                    data: data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        if (!this.state.data) return <div>Ładuję...</div>;

        let matches = this.state.data.result;
        let fcbMatch = matches.filter ( function(match) {
            return match.home_team_key === "7105" || match.away_team_key === "7105";
        });
        fcbMatch = fcbMatch.reverse();

        // console.log(fcbMatch);
        return (<div style={{width: "100%"}}>
                <div className={"bar"}>
                    <Link to={`/matches-1819`}><span>LA LIGA - SEASON 2018-19</span></Link>
                    <Link to={`/matches-1718`} style={{width: "270px" }}><span>LA LIGA - SEASON 2017-18</span></Link>
                </div>
                {fcbMatch.map(match => {
                    return (
                        <div key={match.event_key}>
                            <div style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
                                <h3 className={"bar match_bar"}>{match.league_round}</h3>
                            </div>
                            <div className={"match"}>
                                <div className={"match_teams"}>
                                    <div className={"team"}>{match.event_home_team}</div>
                                    <div className={"score"}>{match.event_final_result}</div>
                                    <div className={"team"}>{match.event_away_team}</div>
                                </div>
                                <br/>
                                <div className={"match_more"}>
                                    <span>HALF TIME</span>
                                    <div className="score">{match.event_halftime_result}</div>
                                    <span>{match.event_date}, {match.event_time}</span><br/>
                                    {/*<span><strong>Refree:</strong> {match.referee}</span>*/}
                                </div>
                            </div>
                            <br/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Matches;