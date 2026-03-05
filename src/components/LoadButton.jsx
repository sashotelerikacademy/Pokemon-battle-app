function LoadButton({ onClick }) {
    return (
        <button onClick={onClick} style={{ padding: "8px 16px", marginTop: "16px" }}>
            Load Random Pokemon
        </button>
    )
}

export default LoadButton