import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import { checkPropTypes } from "prop-types";
import PropTypes from 'prop-types';

const Blogs = ({handleAddtoBookmarks, handleMarkAsRead}) => {

    const [blogs , setBlogs] = useState([]);

    useEffect( () =>{
       fetch('blogs.json') 
       .then(res => res.json())
       .then(data => setBlogs(data))
    },[]

    )
    return (
        <div className="md:w-2/3">
            <h1>Blogs {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                        handleAddtoBookmarks={handleAddtoBookmarks}
                        handleMarkAsRead={handleMarkAsRead}
                        >
                    </Blog>)
            }
        </div>
    );
};

Blogs.PropTypes ={
handleAddtoBookmarks: PropTypes.func,
handleMarkAsRead: PropTypes.func
}
export default Blogs;