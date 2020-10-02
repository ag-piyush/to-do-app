import React from 'react'

function Header() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    
    if (hours<12) {
        timeOfDay = "morning";
    }
    else if (hours < 17) {
        timeOfDay = "afternoon";
    }
    else {
        timeOfDay = "night";
    }
    return (
    <header class="navbar">Hey! Good {timeOfDay}</header>
    );
}

export default Header;
