import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import home from "../../src/assests/header/home.png";
import metabnb from "../../src/assests/header/metabnb.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [show, setShow] = useState(false);

  const showToogler = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <React.Fragment>
      <div className="w-11/12 mx-auto pt-10 flex flex-row justify-between flex-auto items-center font-red-rose text-sm md:w-10/12">
        <div className="hidden order-2 md:flex items-center shadow-sm">
          <img
            src={home}
            alt="home"
            className="w-full h-6 object-cover min-[881px]:h-7"
          />
          <img
            src={metabnb}
            alt="metabnb"
            className=" w-full h-5 object-cover min-[881px]:h-7"
          />
        </div>
        <div className="hidden order-3 md:flex justify-between items-center gap-7 tracking-tight text-textBlack font-normal text-base leading-tight min-[680px]:gap-5 min-[900px]:gap-8 min-[1005px]:gap-16">
          <Link to="/">Home</Link>
          <Link to="/places">Place to Stay</Link>
          <a>NFTs</a>
          <a>Community</a>
        </div>
        <a className="order-1 shadow-sm md:hidden " onClick={showToogler}>
          <FontAwesomeIcon icon={faBars} />
        </a>
        <button
          type="button"
          className="order-4 bg-purple text-white rounded-l-lg rounded-r-lg px-7 py-2 shadow-md"
          onClick={props.toogleModal}
        >
          Connect wallet
        </button>
      </div>

      {show && (
        <div className="w-11/12 mx-auto flex flex-col font-sora md:hidden">
          <Link
            className="block rounded-md py-2 hover:bg-lightGray hover:border hover:border-midGray"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block rounded-md py-2 hover:bg-lightGray hover:border hover:border-midGray"
            to="/places"
          >
            Place to Stay
          </Link>
          <a className="block rounded-md py-2 hover:bg-lightGray hover:border hover:border-midGray">
            NFTs
          </a>
          <a className="block rounded-md py-2 hover:bg-lightGray hover:border hover:border-midGray">
            Community
          </a>
        </div>
      )}
    </React.Fragment>
  );
};

export default Header;
