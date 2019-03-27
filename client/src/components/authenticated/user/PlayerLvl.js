import React from 'react'

//CONTEXT

const PlayerLvl = (props) => {
    
    return (
        <div className="player-level">
            <p>XP</p>
            <div className="level-bar">
                <div className="progress-bar" style={{width: `${props.xp}%`}}/>
            </div>
        </div>
    )
};

export default PlayerLvl

