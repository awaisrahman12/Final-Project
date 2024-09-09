import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      {/* Mobile Menu Button */}
      <div className="sm:hidden flex justify-between items-center p-4">
        <Link to="/" className="flex-grow">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Residence</span>
            <span className="text-slate-700">Navigator</span>
          </h1>
        </Link>
        <button
          className="p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes className="text-slate-700" /> : <FaBars className="text-slate-700" />}
        </button>
      </div>

      {/* Desktop Navigation and Search Bar */}
      <div className={`hidden sm:flex justify-between items-center max-w-6xl mx-auto p-4`}>
        {/* Logo */}
        <Link to="/" className="flex-grow">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Residence</span>
            <span className="text-slate-700">Navigator</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 mr-10 p-3 rounded-lg flex items-center"
          style={{ maxWidth: "400px", flexGrow: 1 }}
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>

        {/* Navigation Links */}
        <ul className="flex gap-6 items-center">
          <Link to="/">
            <li className="text-slate-700 hover:text-slate-500">Home</li>
          </Link>
          <Link to="/contact">
            <li className="text-slate-700 hover:text-slate-500">Contact</li>
          </Link>
          <Link to="/about">
            <li className="text-slate-700 hover:text-slate-500">About</li>
          </Link>
          <Link to={currentUser ? "/profile" : "/sign-in"}>
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="avatar"
                className="rounded-full h-7 w-7 object-cover"
              />
            ) : (
              <button className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">
                Sign In
              </button>
            )}
          </Link>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full bg-white shadow-lg sm:hidden ${menuOpen ? 'block' : 'hidden'}`} style={{ zIndex: 10 }}>
        <div className="relative">
          <button 
            className="absolute top-4 right-4 p-2 text-slate-700"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col items-center py-16">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <li className="py-2 text-slate-700 hover:text-slate-500">Home</li>
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <li className="py-2 text-slate-700 hover:text-slate-500">Contact</li>
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              <li className="py-2 text-slate-700 hover:text-slate-500">About</li>
            </Link>
            <Link to={currentUser ? "/profile" : "/sign-in"} onClick={() => setMenuOpen(false)}>
              {currentUser ? (
                <img
                  src={currentUser.avatar}
                  alt="avatar"
                  className="rounded-full h-7 w-7 object-cover"
                />
              ) : (
                <li className="py-2 text-slate-700 hover:text-slate-500">Sign In</li>
              )}
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
