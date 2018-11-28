import React from "react";
import {
    Link
} from 'react-router-dom';

class Players extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: false,
        }
    }



    componentDidMount(){
        let APIkey = "49aee847dedc17cd8822be90f12e356b6886792a719630d7a9a0b256b5bfd1d1";

        fetch(`https://allsportsapi.com/api/football/?&met=Teams&teamId=7105&APIkey=${APIkey}`)
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

        let allPlayers = this.state.data.result[0].players;
        // let forDeletion = [4, 5, 7, 8, 15, 17, 19, 21, 22, 28, 32, 33];
        allPlayers.splice(4,2);
        allPlayers.splice(5,2);
        allPlayers.splice(11,1);
        allPlayers.splice(12,1);
        allPlayers.splice(13,1);
        allPlayers.splice(14,2);
        allPlayers.splice(19,1);
        allPlayers.splice(9,1);
        allPlayers.splice(21,2);

        console.log(this.state.data.result[0].coaches);

        return ( <div>
                <div className={"bar"}>PLAYERS</div>
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", margin: "0 auto", padding: "10px"}}>

                    {allPlayers.map(players => {
                        return (
                            <Link to={`/players/${players.player_key}`} style={{width: "270px" }}>
                            <div key={players.player_key} className={"hov user_" + players.player_key}>
                                <div className={"player"}>
                                    <div style={{width: "20%", borderRight: "1px solid #eee", fontSize: "22px", fontWeight: "bold"}}>{players.player_number}</div>
                                    <div style={{width: "80%"}}><span style={{fontWeight: "bold"}}>{players.player_name}</span><br/>
                                        <span>{players.player_type}</span></div>
                                </div>
                            </div>
                    </Link>
                        );
                    })}
                </div>
                <div className={"bar"}>COACH</div>

                {this.state.data.result[0].coaches.map(coach => {
                    return <div key={coach.coach_name} className={"coach"}>
                        <div className={"player"}>
                            <div style={{fontWeight: "bold"}}>{coach.coach_name} <br/>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        );
    }
}

export default Players;