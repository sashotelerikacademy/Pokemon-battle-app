import { useState, useEffect, useMemo } from "react"
import { getRandomPokemon } from "../services/api"
import LoadButton from "./LoadButton"
import PokemonCard from "./PokemonCard"
import { getBattleResult } from "../utils/battleLogic"

function PokemonBattle() {
    const [previousPokemon, setPreviousPokemon] = useState(null)
    const [currentPokemon, setCurrentPokemon] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [previousScore, setPreviousScore] = useState(0)
    const [currentScore, setCurrentScore] = useState(0)

    const battleResult = useMemo(() => {
        return getBattleResult(previousPokemon, currentPokemon)
    }, [previousPokemon, currentPokemon])

    useEffect(() => {
        if (!battleResult) return;

        if (battleResult === `Current Pokemon wins!`) {
            setCurrentScore(prev => prev + 1)
        }

        if (battleResult === `Previous Pokemon wins!`) {
            setPreviousScore(prev => prev + 1)
        }
    }, [battleResult])

    const handleLoad = async () => {
        setLoading(true)
        setError("")

        try {
            const newPokemon = await getRandomPokemon()
            setPreviousPokemon(currentPokemon)
            setCurrentPokemon(newPokemon)
        } catch (err) {
            setError("Failed to load Pokemon")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <h2>Pokemon Battle Area</h2>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div>
                <h3>Previous Pokemon</h3>
                {previousPokemon ? <PokemonCard pokemon={previousPokemon} /> : <p>None</p>}
            </div>
            <div>
                <h3>Current Pokemon</h3>
                {currentPokemon ? <PokemonCard pokemon={currentPokemon} /> : <p>None</p>}
            </div>

            <h3>Score</h3>
            <p>Previous: {previousScore}</p>
            <p>Current: {currentScore}</p>

            {battleResult && (
                <h2 style={{ marginTop: "20px" }}>
                    {battleResult}
                </h2>
            )}

            <LoadButton onClick={handleLoad} />
        </div>
    )
}

export default PokemonBattle