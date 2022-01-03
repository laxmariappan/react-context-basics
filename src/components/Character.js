import React, { useContext } from 'react'
import CharactersContext from '../charactersContext'
import Detail from './Details'
const Character = function() {
   const characters = useContext(CharactersContext)
   const renderCharacter = characters => {
     return characters.map( character => {
         return <Detail key={character.id} character={character}/>
     })
   }
 return(
        <>
        <section className='App'>
        <h1>The Big Bang Theory Characters</h1>
        <ul>
          {renderCharacter(characters)}
        </ul>
        </section>
        </>
    )
}
export default Character