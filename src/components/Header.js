import React from 'react'

function Header() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    let colorOfDay;
    
    if (hours<12) {
        timeOfDay = "morning";
        colorOfDay = "white";
    }
    else if (hours < 17) {
        timeOfDay = "afternoon";
        colorOfDay = "orange";
    }
    else if (hours < 22){
        timeOfDay = "evening";
        colorOfDay = "purple";
    }
    else{
        timeOfDay = "night";
        colorOfDay = "black";
    }

    const styles = {
        color: colorOfDay
    }
    return (
    <header class="navbar" style={styles}>Hey! Good {timeOfDay}</header>
    );
}

export default Header;
