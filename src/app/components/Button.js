import '../style.css';

function Button({ id, label, className, loading, onClick }) {
    return (
            <button
                id={id}
                className={className}
                onClick={onClick}
                disabled={loading}
            >
                {label}
            </button>
    );
}

export default Button;