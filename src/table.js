import React from 'react';
import './App.css';

class Table extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            table: false,
        }
    }



    componentDidMount(){
        fetch(`https://heisenbug-la-liga-live-scores-v1.p.mashape.com/api/laliga/table`, {
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
            .then(table => {

                this.setState({
                    table: table
                })
            })
            .catch(err => {
                console.log(err);
            })

    }

    render() {
        if (!this.state.table) return <div>Ładuję...</div>;

        let teams = this.state.table.records;
        return (
            <div>
                <table className={"blauGrana"}>
                    <thead>
                    <tr>
                        <th>NAME</th>
                        <th>PLAYED</th>
                        <th>WIN</th>
                        <th>DRAW</th>
                        <th>LOSE</th>
                        <th>GOALS<br/>
                            FOR</th>
                        <th>GOALS<br/>
                            AGAINST</th>
                        <th>POINTS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {teams.map (teams => {
                        return (
                            <tr key={teams.name}>
                                <td style={{width: "150px"}}>{teams.team}</td>
                                <td>{teams.played}</td>
                                <td>{teams.win}</td>
                                <td>{teams.draw}</td>
                                <td>{teams.loss}</td>
                                <td>{teams.goalsFor}</td>
                                <td>{teams.goalsAgainst}</td>
                                <td>{teams.points}</td>
                            </tr>
                        )
                    })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;
