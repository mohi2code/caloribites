import { useEffect } from "react"

export default function ActivityLevel({ setPage }) {

    useEffect(() => setPage(1), [setPage])

    return (
        <h1>ActivityLevel</h1>
    )
}