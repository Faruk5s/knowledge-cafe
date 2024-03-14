import Header from './Compunents/Header/Header'
import './App.css'
import Blogs from './Compunents/Blogs/Blogs'
import Bookmarks from './Compunents/Bookmarks/Bookmarks'
import { useState } from 'react'



function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime]=useState([0])

  const handleAddtoBookmarks = blog =>{
   const newBookmarks =[...bookmarks, blog];
   setBookmarks(newBookmarks);
  }
  
  
  const handleMarkAsRead = (id,time) =>{
    const newReadingTime = parseInt(readingTime)  + parseInt(time);
    setReadingTime(newReadingTime);
    // remove bookmarks
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
  setBookmarks(remainingBookmarks);
  }
  

  return (
    <>
     
   <Header></Header>
  <div className='md:flex max-w-7xl mx-auto'>
  <Blogs handleAddtoBookmarks={handleAddtoBookmarks} handleMarkAsRead={handleMarkAsRead}
  ></Blogs>
  <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
  </div>
      
      
    </>
  )
}

export default App
