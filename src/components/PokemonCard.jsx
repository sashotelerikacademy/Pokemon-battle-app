function PokemonCard({ pokemon }) {
    if (!pokemon) return null;

    return (
        <div style={{
            border: "2px solid black",
            padding: "12px",
            margin: "12px",
            width: "200px"
        }}>
            <h3>{pokemon.name.toUpperCase()}</h3>

            <img src={pokemon.image} alt={pokemon.name} />

            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Types: {pokemon.types.join(", ")}</p>
        </div>
    )
}

export default PokemonCard