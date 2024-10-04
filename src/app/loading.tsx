export default async function LoadingPage() {
    await new Promise((resolve) => {
        setTimeout(resolve, 5000)
    })
    return (
        <div>
           <h1>Loading...</h1 >
        </div>
    )
};