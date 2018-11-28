import React from 'react';
import './App.css';

class Matches extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: false,
            data1: false,
            open: false
        };
    }


    componentDidMount(){
        fetch(`https://heisenbug-la-liga-live-scores-v1.p.mashape.com/api/laliga?team1=Barcelona`, {
            headers : {
                'X-Mashape-Key' : 'dc033zOkJNmshuccLrvIf9BT4B5cp1aYH49jsn1xJq9Q3AuB8i',
                'Accept' : 'application/json'
            }
        })
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

        fetch(`https://heisenbug-la-liga-live-scores-v1.p.mashape.com/api/laliga?team2=Barcelona`, {
            headers : {
                'X-Mashape-Key' : 'dc033zOkJNmshuccLrvIf9BT4B5cp1aYH49jsn1xJq9Q3AuB8i',
                'Accept' : 'application/json'
            }
        })
            .then(resp => {
                if(resp.ok)
                    return resp.json();
                else
                    throw new Error ("Błąd sieci");
            })
            .then(data1 => {

                this.setState({
                    data1: data1
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        if (!this.state.data) return <div>Ładuję...</div>;
        let data = this.state.data.matches;
        let data1 = this.state.data1.matches;
        let data2 = data.concat(data1);
        let data3 = data2.sort((a, b) => {
            if (a.matchNumber < b.matchNumber)
                return -1;
            if (a.matchNumber > b.matchNumber)
                return 1;
            return 0;
        });

        let matches = data3;
        return (<div style={{width: "100%"}}>
                <div className={"bar"}>SEASON 2018-19</div>
                {matches.map(match => {
                    return (
                        <div key={match.matchNumber}>
                            <div style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
                                <h3 className={"bar match_bar"}>Round {match.matchNumber}</h3>
                            </div>
                            <div className={"match"}>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", padding: "5px"}}>
                                    <div className={"team"}>{match.team1.teamName}</div>
                                    <div className={"score"}>{match.team1.teamScore} : {match.team2.teamScore}</div>
                                    <div className={"team"}>{match.team2.teamName}</div>
                                </div><br/>
                                <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "5px"}}>
                                    <span>HALF TIME</span>
                                    <div className="score">{match.team1.firstHalfScore} : {match.team2.firstHalfScore}</div>
                                    <span>{match.when}</span><br/>
                                    <span><strong>Refree:</strong> {match.referee}</span>
                                </div>
                            </div><br/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Matches;
