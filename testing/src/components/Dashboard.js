import React from 'react'

export function Dashboard (props){

    const addBall = () => {
        props.addBalls(1)
    }

    const addStrike = () => {
        props.addStrikes(1)
    }

    const ResetScores = () => {
        props.reset()
    }

    const addFoul = () => {
        props.foul(1)
    }



    return (
        <div>
        <button onClick={addStrike}>Strike</button>
        <button onClick={addBall}>Ball</button>
        <button onClick={addFoul}>Foul</button>
        <button onClick={ResetScores}>Hit</button>  
        </div>
        
    )
}