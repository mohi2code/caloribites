import { useEffect, useState } from "react"

export default function Select({ children, onChange, vvalue}) {

    const [value, setValue] = useState(children ? children[0]: "")

    useEffect(() => {
        setValue(vvalue)
    }, [vvalue])

    useEffect(() => {
        if (onChange)
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

