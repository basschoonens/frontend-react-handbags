export default function Button({children, handleClick, buttonType, disabled}) {
    return (
        <button
        className="button"
        onClick={handleClick}
        type={buttonType}
        disabled={disabled}
        >
            {children}
        </button>
    );
}


