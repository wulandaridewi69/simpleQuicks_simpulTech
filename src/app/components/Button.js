import '../style.css';

const Button = (props) => {
    return (
            <button
                className={props.className}
                onClick={props.onClick}
                disabled={props.loading}
            >
                {props.label}
            </button>
    );
}

export default Button;