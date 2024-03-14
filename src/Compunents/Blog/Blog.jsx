import PropTypes from 'prop-types';
import { BsBookmarkCheck } from "react-icons/bs";

const Blog = ({ blog ,handleAddtoBookmarks ,handleMarkAsRead}) => {
    const {id, title, cover, author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex'>
                      <img className='w-14' src={author_img} alt="" />
                      <div className='ml-6 '>
                        <h1 className='text-2xl'>{author}</h1>
                        <p>{posted_date}</p>
                      </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                    onClick={() =>handleAddtoBookmarks(blog)}
                    className='ml-2 text text-3xl text-green-700'><BsBookmarkCheck /></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button
            onClick={() => handleMarkAsRead (id,reading_time)}
             className='text-blue-500 , font-bold , underline'>Mark as read</button>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleAddtoBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blog;