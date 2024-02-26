export default function Product(props) {
    return (
            <article>
                <span>{props.label}</span>
                <img src={props.img} alt={props.imgDescription}/>
                <p>{props.title}</p>
                <h4>{props.price}</h4>
                {props.children}
            </article>
    );
}

