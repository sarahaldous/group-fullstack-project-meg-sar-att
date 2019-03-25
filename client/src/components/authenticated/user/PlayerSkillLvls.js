import React from 'react'

const PlayerSkillLvls = (props) => {
    return (
        <div className="skill-bar-container">
            <p>{props.category}</p>
            <div className="skill-bar">
                <div className="skill-progress-meter"
                style={{width: `${props.sp}%`}}/>
            </div>
        </div>
        
    )
};

export default PlayerSkillLvls