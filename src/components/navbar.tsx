function NavBar() {
    return ( <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <img src="./icons/hamburger-menu.svg" height={30} width={30} alt="" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="text-xl">
            <img src="./growth-arc-logo.png" alt="" />
          </a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost rounded-lg text-[#000]">
            Login
          </button>
          <button className="btn btn-ghost rounded-lg text-[#000]">
            Signup
          </button>
        </div>
      </div> );
}

export default NavBar;