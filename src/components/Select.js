import { useEffect, useState } from "react"

export default function Select({ children, onChange }) {

    const [value, setValue] = useState(children ? children[0]: "")

    useEffect(() => {
        onChange(value)
    }, [value])

    return (
        <div className="select">
           { children ? 
            children.map((child, i) => (
                <input 
                    type="button"
                    value={child}
                    onClick={() => setValue(child)}
                    className={ value == child ? "selected": "" }
                />
            )) :
            <input type="Button" value="No options entered"/> }
        </div>
    )
}

