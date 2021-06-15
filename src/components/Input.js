import { useEffect, useState } from "react"

export default function Input({ type, placeholder, tag, value, onChange }) {
    return (
        <div className="input-container">
            <input  
                type={type}
                placeholder={placeholder} 
                tag={tag} 
                value={value} 
                onChange={onChange}
            />
            <span>{ tag ? tag : '' }</span>
        </div>
    )
}