import React from 'react'

const QuestCard = () => {
    return (
        <div className="quest-card">
            <h3>Up Your Laundry Game</h3>
            <iframe 
                title="DIY Smart Washer and Dryer on a Budget"
                src="https://www.youtube.com/embed/7wR7Im8n8-s" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                className="quest-card-video"
            />
            <p>Every wondered if there was a way to convert your dumb washing machine and dryer into a smart washer or smart dryer? Well it might be easier than you think.</p>
            <div className="reward-container">
                
            </div>
        </div>
    )
}

export default QuestCard