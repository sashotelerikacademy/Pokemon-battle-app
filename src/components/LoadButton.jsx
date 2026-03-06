import "./LoadButton.css"

function LoadButton({ onClick }) {
    return (
        <button className="load-button" onClick={onClick}>
            Load Random Pokemon
        </button>
    )
}

export default LoadButton