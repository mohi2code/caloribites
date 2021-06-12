export default function Input(props) {
    return (
        <div className="input-container">
            <input {...props}/>
            <span>{ props.tag ? props.tag : '' }</span>
        </div>
    )
}