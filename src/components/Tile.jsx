export default function Tile({children, title, image, imgDescription}) {
    return (
            <section>
                {image && <img src={image} alt={imgDescription}/>}
                <h2>{title}</h2>
                {children}
            </section>
    );
}

