import React from "react";

class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: false,
        }
    }


    componentDidMount() {
        let APIkey = "49aee847dedc17cd8822be90f12e356b6886792a719630d7a9a0b256b5bfd1d1";
        let id_player = this.props.match.params.player_id;

        fetch(`https://allsportsapi.com/api/football/?&met=Players&playerId=${id_player}&APIkey=${APIkey}`)
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
        let Player = this.state.data.result[0];

        return (<div style={{width: "100%"}}>
                <div className={"bar"}>{Player.player_name}</div>
                <div>
                    <div style={{display: "flex", justifyContent: "space-around"}}>
                        <div className={"user_" + Player.player_key}
                             style={{width: "35%", padding: "10px", margin: "10px"}}> </div>
                        <div style={{
                            width: "65%",
                            padding: "5px",
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column"
                        }}>
                            <div className={"player_bar"}>NUMBER</div>
                            <div className={"player_bar_data"}>{Player.player_number}</div>
                            <div className={"player_bar"}>NAME</div>
                            <div className={"player_bar_data"}>{Player.player_name}</div>
                            <div className={"player_bar"}>POSITION</div>
                            <div className={"player_bar_data"}>{Player.player_type}</div>
                            <div className={"player_bar"}>AGE</div>
                            <div className={"player_bar_data"}>{Player.player_age}</div>
                            <div className={"player_bar"}>COUNTRY</div>
                            <div className={"player_bar_data"}>{Player.player_country}</div>
                            <div className={"player_bar"}>MATCH PLAYED</div>
                            <div className={"player_bar_data"}>{Player.player_match_played}</div>
                            <div className={"player_bar"}>GOALS</div>
                            <div className={"player_bar_data"}>{Player.player_goals}</div>
                            <div className={"player_bar"}>CARDS</div>
                            <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
                                <div style={{
                                    marginTop: "5px",
                                    background: "#deb500",
                                    width: "30%",
                                    textAlign: "center"
                                }}>
                                    {Player.player_yellow_cards}
                                </div>
                                <div style={{marginTop: "5px", background: "red", width: "30%", textAlign: "center"}}>
                                    {Player.player_red_cards}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;