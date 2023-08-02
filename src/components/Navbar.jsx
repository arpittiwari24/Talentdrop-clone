import { useState } from 'react';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <div className="navbar py-6">
        <div className="flex-1 pl-0">
          <img src="asset 0.png" alt="logo" className="w-48 h-14" />
        </div>
        <div className="hidden md:flex md:items-center">
          <ul className="menu menu-horizontal px-2 py-1">
            <li>
              <a className="text-xl text-white">About</a>
            </li>
            <li>
              <a className="text-xl text-white">Sign in</a>
            </li>
            <li className="text-2xl bg-fuchsia-600 hover:bg-fuchsia-500 rounded-full">
              <a className="text-xl text-white">
                <button>Sign up</button>
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <div className="drawer drawer-end">
            <input
              id="my-drawer-4"
              type="checkbox"
              className="drawer-toggle"
              checked={isDrawerOpen}
              onChange={handleDrawerToggle}
            />
            <div className="drawer-content">
              <label htmlFor="my-drawer-4" className="drawer-button">
                <img src="asset 1.png" alt="icon" />
              </label>
            </div>
            {isDrawerOpen && (
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-overlay"
                  onClick={handleDrawerClose}
                ></label>
                <ul className="menu p-4 w-full h-full pt-8 bg-white text-base-content">
                <div><i className="fa-solid fa-xmark mr-0" onClick={handleDrawerClose}></i></div>
                  <li>
                    <a className="text-xl text-gray-20">About</a>
                  </li>
                  <li>
                    <a className="text-xl text-gray-20">Sign in</a>
                  </li>
                  <li className="text-0.5xl bg-fuchsia-600 hover:bg-fuchsia-500 rounded-full">
                    <a className="text-xl text-white">
                      <button>Sign up</button>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
