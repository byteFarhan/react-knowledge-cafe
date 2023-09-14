import PropTypes from "prop-types";
import { BsBookmarkStar } from "react-icons/bs";
const Blog = ({ blog, handleBookmarks, handleReadingTime }) => {
  //   console.log(blog);
  //   console.log(blog);
  //   console.log(handleReadingTime);
  const {
    id,
    author,
    cover,
    title,
    author_img,
    hashtags,
    posted_date,
    reading_time,
  } = blog;
  return (
    <div className="mb-20 space-y-5">
      <img src={cover} alt="" className="w-full rounded-lg " />
      <div className="flex justify-between ">
        <div className="flex gap-5">
          <img src={author_img} alt="" className="w-16 " />
          <div>
            <h2 className="text-lg font-bold ">{author}</h2>
            <p className="font-medium ">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <p className="font-medium ">
            {reading_time < 10 ? `0${reading_time}` : reading_time} min read
          </p>
          <button onClick={() => handleBookmarks(blog)} className="text-xl ">
            <BsBookmarkStar />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold ">{title}</h2>
      <p>
        {hashtags.map((hashtag, idx) => (
          <a
            key={idx}
            href={`#${hashtag}`}
            className="mr-5 text-lg text-blue-600"
          >
            #{hashtag}
          </a>
          //   <span key={idx}>#{hashtag}</span>
        ))}
      </p>
      <button
        onClick={() => handleReadingTime(reading_time, id)}
        className="text-lg font-medium text-blue-600 underline"
      >
        Mark as read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};
export default Blog;
