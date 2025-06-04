import React, { useState } from 'react';

const menuItems = [
  'Home',
  'Blockchain',
  'Tokens',
  'NFTs',
  'Resources',
  'Developers',
  'More',
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white text-black py-4 px-6 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://etherscan.io/images/logo-ether.png"
            alt="Etherscan Logo"
            className="h-6"
          />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <button
              key={item}
              className="hover:text-blue-600 flex items-center transition-colors"
            >
              {item}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          ))}
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 flex items-center transition-colors ml-4"
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-2.209 0-4 1.791-4 4v1h8v-1c0-2.209-1.791-4-4-4z"
              />
            </svg>
            Sign In
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="focus:outline-none"
            aria-label="Open Menu"
          >
            <svg
              className="w-7 h-7 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow">
          <div className="flex flex-col px-6 py-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item}
                className="flex items-center text-left py-2 px-2 hover:text-blue-600 transition-colors"
              >
                {item}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            ))}
            <a
              href="#"
              className="flex items-center py-2 px-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-2.209 0-4 1.791-4 4v1h8v-1c0-2.209-1.791-4-4-4z"
                />
              </svg>
              Sign In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;