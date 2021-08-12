export default function InputWithTag({ name, value, onChange, type, placeholder, tag }) {
    return (
        <div className="input-with-tag">
            <input 
                type={type} placeholder={placeholder} 
                name={name} value={value} onChange={onChange} 
            />
            <span className="tag">{tag}</span>
        </div>
    )
}