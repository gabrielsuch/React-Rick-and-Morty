import "./style.css"

const CharCard = ({character}) => {

    return (
        <div className={
            character.status === "Alive" ?
            "alive" :
            character.status === "Dead" ?
            "dead" :
            "unknown"
        }>

            <li key={character.id}>
                <p>{character.name}</p>
                <img src={character.image} alt={character.name} />
                <p>{character.status}</p>
                <p>{character.species}</p>
            </li>
        </div>
    )
}

export default CharCard