import React from "react"
export default function Detail({character}){
    return(
        <li className="character">{character.name}{' '}({character.job})</li>
    )
}