export function getBattleResult(previous, current) {

    if (!previous || !current) {
        return null
    }

    const prevType = previous.types[0]
    const currType = current.types[0]

    const typeMatch = prevType === currType

    let winner
    let message

    if (typeMatch) {
        winner = "draw"
        message = "TYPE MATCH!"
    }
    else if (currType === "fire" && prevType === "grass") {
        winner = "current"
        message = "Current Pokemon wins!"
    }
    else if (prevType === "fire" && currType === "grass") {
        winner = "previous"
        message = "Previous Pokemon wins!"
    }
    else if (currType === "water" && prevType === "fire") {
        winner = "current"
        message = "Current Pokemon wins!"
    }
    else if (prevType === "water" && currType === "fire") {
        winner = "previous"
        message = "Previous Pokemon wins!"
    }
    else {
    if (current.weight > previous.weight) {
        winner = "current"
        message = "Current Pokemon wins by weight!"
    } else if (previous.weight > current.weight) {
        winner = "previous"
        message = "Previous Pokemon wins by weight!"
    } else {
        winner = "draw"
        message = "Perfect draw!"
    }
}

    return {
        winner,
        message,
        typeMatch
    }
}