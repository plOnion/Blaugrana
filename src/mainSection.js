import React from 'react';
import './App.css';
import NextMatch from "./nextMatch";
import PrevMatch from "./prevMatch";

class MainSection extends React.Component{

    render() {
        return (
                <section>
                    <main>
                            {this.props.children}
                    </main>

                    <aside style={{display: "flex"}}>

                            <NextMatch/>
                            <PrevMatch/>

                    </aside>
                </section>
            )
    }}

export default MainSection;
