export default function Pagination({ page }) {

    console.log({ page })

    return (
        <div className="pagination">
            <div className={`pagination-dot ${ page === 0 ? "pagination-selected": "" }`}></div>
            <div className={`pagination-dot ${ page === 1 ? "pagination-selected": "" }`}></div>
            <div className={`pagination-dot ${ page === 2 ? "pagination-selected": "" }`}></div>
        </div>
    )
}