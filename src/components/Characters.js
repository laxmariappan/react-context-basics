import React from 'react'
import Character from './Character'
import { CharactersProvider } from '../charactersContext'
const Characters = function() {
    const characters = [
        {id: 1, name: 'Leonard Hofstadter', job: 'experimental physicist'},
        {id: 2, name: 'Sheldon Cooper', job: 'theoretical physicist'},
        {id: 3, name: 'Penny Teller', job: 'aspiring actress'},
        {id: 4, name: 'Howard Wolowitz', job: 'aerospace engineer'},
        {id: 5, name: 'Raj Koothrappali', job: 'astroparticle physicist'}
      ]
return(
        <div>
            <CharactersProvider value={characters}>
                <Character/>
            </CharactersProvider>
        </div>
 )
}
export default Characters