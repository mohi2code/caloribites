import { useEffect } from "react"

export default function BodyParameters({ setPage }) {

    useEffect(() => setPage(0), [setPage])

    return (
        <h1>Body Parameters</h1>
    )
}