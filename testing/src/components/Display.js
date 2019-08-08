import React from 'react'

export function Display (props){
    return (
        <div>
           <p>balls: {props.balls}</p>
        <p>strike: {props.strike}</p> 
        <p>outs: {props.outs}</p> 
        </div>
        
    )
}