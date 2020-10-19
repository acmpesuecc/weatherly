import React from 'react';

/* 
    Define the Dashboard page component here. This would basically consist of the entire Dashboard page layout that wraps the functionality of the website. You should be able to see a search bar, a time clock and the weather data. 
    Additional features could be a picture of the location and differenciating colors between day and night.
*/


function Dashboard() {
    return (
        <>
            <h1>
                Weatherly Dashboard
            </h1>
            This is the dashboard.You should see a searchbar, a picture of the location and time of that location. This should be fun. 
            <a href = "/">Go back</a>
        </>
    );
}

export default Dashboard;