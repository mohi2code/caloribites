import { useEffect } from "react"

export default function Goal({ setPage }) {

    useEffect(() => setPage(2), [setPage])

    return (
        <h1>Goal</h1>
    )
}