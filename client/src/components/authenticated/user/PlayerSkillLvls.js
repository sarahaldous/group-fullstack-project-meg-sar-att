import React from 'react'

const PlayerSkillLvls = (props) => {
    return (
        <div className="skill-bar-container">
            <div className="skill-category">
                <p>{props.category}</p>
            </div>
            <div className="skill-bar">
                <div className="skill-progress-meter"
                style={{width: `${props.sp}%`}}/>
            </div>
        </div>
        
    )
};

export default PlayerSkillLvls