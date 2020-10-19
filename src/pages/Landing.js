import React from 'react';

/* 
    Define the landing page component here. This would basically consist of the entire landing page layout that informs the user coming in about what exactly the website does, and guides them to move on to the functionality page of our website.
*/


function Landing() {
    return (
        <div className="App">
        <h1>
            Weatherly
        </h1>
        Welcome to weatherly.
        Here we do a lot of things. 
        <b>
            <ul>
            <li>
                Search by city name and you get instant weather
            </li>
            <li>
                You get instant time
            </li>
            </ul>
        </b>
        <a href = "/dashboard">Let's gooo</a>
        </div>
    );
}

export default Landing;