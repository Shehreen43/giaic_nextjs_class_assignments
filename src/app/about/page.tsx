export default async function AboutPage() {
    await new Promise((resolve) => {
        setTimeout(resolve, 5000)
    });
    return (
        <div>
            <h1>About</h1>
            <p>This is the about page</p>
        </div>
    )
 }