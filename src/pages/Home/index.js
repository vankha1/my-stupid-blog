import Blog from "~/layouts/Blogs/Blog";
import Header from "~/layouts/Header/Header";

function Home() {
    return ( 
        <div>
            <Header />
            <Blog />
            {/* <h1>Home page</h1> */}
        </div>
    );
}

export default Home;
