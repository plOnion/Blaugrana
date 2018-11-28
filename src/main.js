import React from "react";

<div className={"main_container"}>
    <header>
        <button className="hamburger-trigger"><i className="fa fa-bars"></i></button>
        <div className="header-container">
            <div className="logo">
                <a href="#" className="logo__trigger"></a>
            </div>
            <nav id="navbar">
                <ul className="main-menu">
                    <li className="dropdown"><a href="#">Main</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Statistic</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <section>
        <main>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at necessitatibus pariatur
                placeat suscipit! Fugit hic iste minima odio quas sapiente totam! Blanditiis delectus est
                exercitationem ipsa mollitia quis quod!
            </div>
        </main>

        <aside>
            <div>
                NEXT MATCH
            </div>
            <div>
                PREVIOUS MATCH
            </div>
        </aside>
    </section>
    <footer>
        <div className="footer_container">
            <div className="footer_copy">Copyright 2018 | All Rights Reserved - BlauGrana</div>
            <div className={"foot_logo"}><a className="logo__trigger" href={"#"}></a></div>
        </div>
    </footer>
</div>