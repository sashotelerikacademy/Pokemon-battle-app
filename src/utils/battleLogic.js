export function getBattleResult(previous, current) {
    if (!previous || !current) return null

    if (current.weight > previous.weight) {
        return "Current Pokemon wins!"
    }

    if (current.weight < previous.weight) {
        return "Previous Pokemon wins!"
    }

    // ако weight е равен
    if (current.height > previous.height) {
        return "Current Pokemon wins!"
    }

    if (current.height < previous.height) {
        return "Previous Pokemon wins!"
    }

    return "Draw!"
}