import "./style.css"
import CharCard from "../CharCard"

const Characters = ({characterList}) => {

    return(
        <>
            <h1>Meus Personagens</h1>
            <ul>
            {
                characterList.map((character) => (
                    <CharCard key={character.id} character={character}/>
                ))
            }
            </ul>
        </>
    )
}

export default Characters