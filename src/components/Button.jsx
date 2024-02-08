export default function Button({children, handleClick, buttonType, btnActive}) {
    return (
        <button
        className="button"
        onClick={handleClick}
        type={buttonType}
        disabled={btnActive}
        >
            {children}
        </button>
    );
}


