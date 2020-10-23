import React from 'react';
import Navbar from '../components/Navbar';
/* 
    Define the Dashboard page component here. This would basically consist of the entire Dashboard page layout that wraps the functionality of the website. You should be able to see a search bar, a time clock and the weather data. 
    Additional features could be a picture of the location and differenciating colors between day and night.
*/


function Dashboard() {
    return (
        <>
            <Navbar />
            <h2>
                Dashboard
            </h2>
            This is the dashboard.You should see a searchbar, a picture of the location and time of that location. This should be fun. 
            <br />
            <a href = "/">Go back</a>
        </>
    );
}

export default Dashboard;