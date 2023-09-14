import PropTypes from "prop-types";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="order-1 lg:order-2 lg:w-1/3">
      <div className="p-5 mb-5 text-center border-2 border-blue-700 rounded-lg">
        <p className="text-2xl font-semibold ">
          Spent time on read : {readingTime} min
        </p>
      </div>
      <div className="p-5 pb-10 space-y-5 rounded-lg bg-slate-100 ">
        <p className="text-2xl font-bold ">Bookmarks: {bookmarks.length}</p>
        {/* <h1 className="text-2xl font-semibold ">{bookmarks.title}</h1> */}
        {bookmarks.map((bookmark, idx) => (
          <h1
            key={idx}
            className="px-5 py-6 text-2xl font-semibold bg-white rounded-lg "
          >
            {bookmark.title}
          </h1>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default Bookmarks;
