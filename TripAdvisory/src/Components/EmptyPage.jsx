export default function EmptyPage(RefeshHandler) {
    return (
        <>
            <h1>No Tours</h1>
            <button onClick={RefeshHandler}>Refesh</button>
        </>
    )
}