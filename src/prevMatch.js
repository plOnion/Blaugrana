import React from 'react';
import './App.css';

class PrevMatch extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: false,
            data1: false
        }
    }

    componentDidMount(){
        let APIkey = "49aee847dedc17cd8822be90f12e356b6886792a719630d7a9a0b256b5bfd1d1";

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();
        let dd3 = dd - 15;
        let mm3 = mm;
        if(dd<10) {
            dd = '0' + dd
        }

        if (dd <= "13"){
            dd3 = "15";
            mm3 = mm - 1;
        }

        if (dd3<10) {
            dd3 = '0' + dd3
        }

        if(mm<10) {
            mm = '0' + mm
        }


        fetch(`https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${APIkey}&from=${yyyy}-${mm3}-${dd3}&to=${yyyy}-${mm}-${dd}&leagueId=468`)
            .then(resp => {
                if(resp.ok)
                    return resp.json();
                else
                    throw new Error ("Błąd sieci");
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

        let prevMatch = matches.filter ( function(match) {
            return match.event_key === "154542";
        });

        let cards = prevMatch[0].cards;
        let goals = prevMatch[0].goalscorers;
        let event = cards.concat(goals);
        // let events = event.sort((a, b) => {
        //     if (a.time < b.time)
        //         return -1;
        //     if (a.time > b.time)
        //         return 1;
        //     return 0;
        // });

        return  (
            <div style={{marginTop: "25px", marginBottom: "15px"}}>
                <div className={"bar"}>PREVIOUS MATCH</div>
                <div style={{marginTop: "15px"}}>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div className={"flex_col"} style={{width: "30%"}}>
                            <div className={"team_" + prevMatch[0].home_team_key}> </div>
                            <div className={"team"}> {prevMatch[0].event_home_team}</div>
                        </div>
                        <div className={"score"}>{prevMatch[0].event_final_result}</div>
                        <div className={"flex_col"} style={{width: "30%"}}>
                            <div className={prevMatch[0].event_away_team}> </div>
                            <span className={"team"}> {prevMatch[0].event_away_team}</span>
                        </div>
                    </div>
                    <div>{prevMatch[0].event_date}, {prevMatch[0].event_time}</div>
                    <div>{prevMatch[0].league_name} - {prevMatch[0].league_round}</div><br/>
                    {/*<div>More info: <br/>*/}
                        {/*{events.map(event => {*/}
                            {/*return (*/}
                                {/*<div key={event.time}>time: {event.time}" - {event.home_scorer} {event.card} {event.home_fault} {event.score} {event.away_fault} {event.away_scorer}</div>*/}
                            {/*)}*/}
                        {/*)}*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default PrevMatch;
