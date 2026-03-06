import "./PokemonCard.css"
import { memo } from "react"

function PokemonCard({ pokemon }) {
    if (!pokemon) return null

    return (
        <div className="pokemon-card">
            <h3>{pokemon.name.toUpperCase()}</h3>

            <img src={pokemon.image} alt={pokemon.name} />

            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>
                Types:{" "}
                {pokemon.types.map(type => (
                    <span key={type} className={`type ${type}`}>
                        {type}
                    </span>
                ))}
            </p>
        </div>
    )
}

export default memo(PokemonCard)