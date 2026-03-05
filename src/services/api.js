export async function getRandomPokemon() {
    try {
        const maxPokemon = 1009
        const randomId = Math.floor(Math.random() * maxPokemon) + 1

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)

        if (!response.ok) {
            throw new Error("Failed to fetch Pokemon")
        }

        const data = await response.json()

        return {
            name: data.name,
            height: data.height,
            weight: data.weight,
            types: data.types.map(t => t.type.name),
            image: data.sprites.front_default
        }

    } catch (err) {
        console.error("API error:", err)
        throw err
    }
}