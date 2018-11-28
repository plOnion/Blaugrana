import React from 'react';
import './App.css';

class NextMatch extends React.Component{
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
        let dd2 = dd + 3;
        if(dd<10) {
            dd = '0'+dd
        }

        if(mm<10) {
            mm = '0'+mm
        }


        fetch(`https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${APIkey}&from=${yyyy}-${mm}-${dd}&to=${yyyy}-${mm}-(${dd2}`)
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
        var nextMatch = matches.filter ( function(match) {
            return match.home_team_key === "7105" || match.away_team_key === "7105";
        });

        if (nextMatch[0].event_final_result === ""){
            nextMatch[0].event_final_result = " - "
        }
        return  (
            <div style={{width: "100%"}}>
                <div className={"bar"}>NEXT MATCH</div>
                <div>
                    <div style={{display: "flex"}}>
                        <div style={{display: "flex", alignItems: "center", flexDirection: "column", padding: "5px", width: "30%"}}>
                            <div className={"team_" + nextMatch[0].home_team_key}> </div>
                            <div className={"team"}>{nextMatch[0].event_home_team}</div>
                        </div>
                        <div className={"score"}>{nextMatch[0].event_final_result}</div>
                        <div style={{display: "flex", alignItems: "center", flexDirection: "column", padding: "5px", width: "30%"}}>
                            <div className={nextMatch[0].event_away_team}> </div>
                            <div className={"team"}>{nextMatch[0].event_away_team}</div>
                        </div>
                    </div>
                    <div>{nextMatch[0].event_date}, {nextMatch[0].event_time}</div>
                    <div>{nextMatch[0].league_name} - {nextMatch[0].league_round}</div>
                </div>
            </div>
        )
    }
}

export default NextMatch;