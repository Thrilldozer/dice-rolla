import React from 'react';

const Modifier = () => {

    function stats() {
        var input = document.getElementById("playerStrength").value;
        alert(input);
    }

    return(
        <section>
            <h3 id="playerStrength">Input your Strength <input type="text"/></h3> 
            <h3 id="playeDexterity">Input your Dexterity <input type="text"/></h3> 
            <button>set stats</button>
        </section>
    )
}

 

export default Modifier;