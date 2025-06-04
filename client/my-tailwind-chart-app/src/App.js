import React from 'react';
import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import Blocks from './pages/Blocks';
import Transactions from './pages/Transactions';
import Stats from './pages/Stats';

const App = () => (
  <>
  <div className="bg-gray-100 min-h-screen">
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <SearchSection />
      {/* <Stats /> */}
    </div>
    {/* <div className="container mx-auto px-4 bg-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Blocks />
      <div>
        <Transactions />
      </div>
    </div> */}
     {/* <div className="container mx-auto px-4 bg-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-6 -mt-6">
      <div className="bg-white rounded-lg">
        <Blocks />
      </div>
      <div className="bg-white rounded-lg">
        <Transactions />
      </div>
    </div> */}
     </div>

  </>
);

export default App;