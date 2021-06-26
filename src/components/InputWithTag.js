export default function InputWithTag({ value, onChange, type, placeholder, tag }) {
    return (
        <div className="input-with-tag">
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
            <span className="tag">{tag}</span>
        </div>
    )
}