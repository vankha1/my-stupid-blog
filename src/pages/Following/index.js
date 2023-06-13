import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Content from "~/layouts/Contents";
import blogs from "~/data/blogs";

function Following() {
    const {index} = useParams();
    const [selectedBlog, setSelectedBlog] = useState(null);

    console.log(selectedBlog)
    
    useEffect(() => {
        let selectedBlog = blogs.find((blog) => {
            return blog.id === parseInt(index);
        })
        // if (selectedBlog){
            setSelectedBlog(selectedBlog)
        // }
    }, [])

    return ( 
        <div>
            {/* <h1>Following page</h1> */}
            {!!selectedBlog && <Content blog={selectedBlog} />}
        </div>
    );
}

export default Following;