export default function Post(props) {
    return(
        <div>
            <h3>{props.user}</h3>
            <p>{props.body}</p>
        </div>
    )
}