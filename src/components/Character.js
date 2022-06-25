export default function Character({name, photo, description}) {
    return (
        <div>
            <h3>
                {name}
            </h3>
            <p>{description}</p>
            <img src={photo} alt={name}/>
        </div>
    );
}