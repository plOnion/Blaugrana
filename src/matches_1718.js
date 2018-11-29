import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

class Matches_1718 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: false,
        };
    }


    componentDidMount() {

        let APIkey = "49aee847dedc17cd8822be90f12e356b6886792a719630d7a9a0b256b5bfd1d1";

        fetch(`https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${APIkey}&from=2017-08-01&to=2018-06-01&leagueId=468`)
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

        console.log(fcbMatch);
        // let data = this.state.data.matches;
        // let data1 = this.state.data1.matches;
        // let data2 = data.concat(data1);
        // let data3 = data2.sort((a, b) => {
        //     if (a.matchNumber < b.matchNumber)
        //         return -1;
        //     if (a.matchNumber > b.matchNumber)
        //         return 1;
        //     return 0;
        // });
        //
        // let matches = data3;
        // console.log(this.state.data);
        return (<div style={{width: "100%"}}>
                <div className={"bar"}>
                    <Link to={`/matches-1718`}><span>LA LIGA - SEASON 2017-18</span></Link>
                    <Link to={`/matches-1819`}><span>LA LIGA - SEASON 2018-19</span></Link>
                </div>
                {fcbMatch.map(match => {
                    return (
                        <div key={match.event_key}>
                            <div style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
                                <h3 className={"bar match_bar"}>{match.league_round}</h3>
                            </div>
                            <div className={"match"}>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    padding: "5px"
                                }}>
                                    <div className={"team"}>{match.event_home_team}</div>
                                    <div className={"score"}>{match.event_final_result}</div>
                                    <div className={"team"}>{match.event_away_team}</div>
                                </div>
                                <br/>
                                <div style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    padding: "5px"
                                }}>
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

export default Matches_1718;
