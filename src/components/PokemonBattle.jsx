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
    const [typeMatches, setTypeMatches] = useState(0)

    const handleResetScore = () => {
        setPreviousScore(0)
        setCurrentScore(0)
        setPreviousPokemon(null)
        setCurrentPokemon(null)
    }

    const battleResult = useMemo(() => {
        return getBattleResult(previousPokemon, currentPokemon)
    }, [previousPokemon, currentPokemon])

    useEffect(() => {
        if (!battleResult) return;

        if (battleResult?.winner === "current") {
            setCurrentScore(prev => prev + 1)
        }

        if (battleResult?.winner === "previous") {
            setPreviousScore(prev => prev + 1)
        }

        if (battleResult?.typeMatch) {
            setTypeMatches(prev => prev + 1)
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

            <button onClick={handleResetScore} style={{ marginTop: "10px" }}>
                Reset Score
            </button>

            {battleResult && (
                <h2
                    style={{
                        marginTop: "20px",
                        color:
                            battleResult.winner === "current"
                                ? "green"
                                : battleResult.winner === "previous"
                                    ? "red"
                                    : "gray"
                    }}
                >
                    {battleResult.message}
                </h2>
            )}

            <h3>Counters</h3>
            <p>Previous Score: {previousScore}</p>
            <p>Current Score: {currentScore}</p>
            <p>Type Matches: {typeMatches}</p>

            <LoadButton onClick={handleLoad} />
        </div>
    )
}

export default PokemonBattle