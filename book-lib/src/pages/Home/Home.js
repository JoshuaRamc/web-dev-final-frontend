import { useEffect } from "react";
function Home() {
    useEffect(() => {
        console.log('hi')
      });
    return (
        <h1>
            Home Page
        </h1>
    )
}

export default Home;