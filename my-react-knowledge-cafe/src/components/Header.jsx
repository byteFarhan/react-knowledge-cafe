import profile from "../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between px-5 py-2 my-5 border-b border-info ">
      <h1 className="text-3xl font-bold md:text-4xl text-accent">
        Knowledge Cafe
      </h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
