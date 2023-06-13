import Content from "~/layouts/Contents";
import blogs from "~/data/blogs";

function Following() {
    return ( 
        <div>
            {/* <h1>Following page</h1> */}
            <Content blog={blogs[0]} />
        </div>
    );
}

export default Following;