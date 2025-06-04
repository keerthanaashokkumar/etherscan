

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Stats from '../pages/Stats';
import Blocks from '../pages/Blocks';
import Transactions from '../pages/Transactions';

const SearchSection = () => {
  const [filter, setFilter] = useState('ALL Filters');
  const filterOptions = ['ALL Filters', 'Address', 'Txn Hash', 'Block', 'Token', 'Domain Name'];

  const handleFilterChange = (option) => {
    setFilter(option);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.searchInput.value;
  };

  return (
   
    <div className="bg-[#1C2526] pt-24 pb-20 relative ">
      <div className="container mx-auto px-4 pr-33 relative">
        <div className="relative max-w-2xl mx-auto z-10 md:hidden sm:hidden lg:block">
          <form onSubmit={handleSearch}>
            <div className="flex items-center bg-white shadow rounded-lg overflow-hidden">
              <div className="relative">
                <select
                  value={filter}
                  onChange={(e) => handleFilterChange(e.target.value)}
                  className="appearance-none bg-gray-100 text-gray-700 px-4 py-3 pr-8 rounded-l-lg focus:outline-none"
                >
                  {filterOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <input
                type="text"
                name="searchInput"
                placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
                className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-r-lg"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
       
       
         </div>
           <div
          className="absolute left-1/2 w-full max-w-36xl h-auto z-20 mt-16"
          style={{
            top: '100%',
            transform: 'translate(-50%, -10%)', 
            pointerEvents: 'none',
             minHeight: '220px',
          }}
        >
          <Stats />
        </div> 
      </div>
     
   
   
    </div>
      
  );
};

export default SearchSection;