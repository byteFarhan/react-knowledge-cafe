// const originalArray = [1, 2, 2, 3, 4, 4, 5];

// const uniqueArray = originalArray.filter((item, index, arr) => {
//   return arr.indexOf(item) === index;
// });
// console.log(uniqueArray);

import { useState } from "react";
import Blogs from "./components/Blogs.jsx/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    const uniceBookmarks = [];
    for (const bookmark of newBookmarks) {
      // console.log(bookmark);
      if (!uniceBookmarks.includes(bookmark)) {
        uniceBookmarks.push(bookmark);
      }
    }
    setBookmarks(uniceBookmarks);
    // console.log(blog);
    // console.log(newBookmarks);
  };
  function handleReadingTime(time, id) {
    setReadingTime(readingTime + time);
    // console.log(readingTime);
    // console.log(time);
    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className="flex flex-col gap-5 my-10 lg:flex-row">
        <Blogs
          handleBookmarks={handleBookmarks}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
