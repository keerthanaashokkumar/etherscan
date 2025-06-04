
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';

const Blocks = () => {
  const [blocksData, setBlocksData] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchBlocks = async () => {
    try {
  
       const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/blocks`,
          {
            headers: {
              'x-api-key': process.env.REACT_APP_SIM_API_KEY,
            },
          }
        );
      const data = await res.json();
      console.log(data);
      setBlocksData(Array.isArray(data) ? data : data.activity || []);
    } catch (error) {
      setBlocksData([]);
    } finally {
      setLoading(false);
    }
  };
  fetchBlocks();
}, []);

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-semibold text-black">Latest Blocks</h2>
          <button className="text-gray-500 border border-gray-300 rounded px-3 py-1 hover:text-gray-700 flex items-center">
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37zM12 15a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
            Customize
          </button>
        </div>
        <div>
          {loading ? (
            <div className="text-center text-gray-400 py-8">Loading...</div>
          ) : (
            blocksData.slice(0, 6).map((block, index) => (
              <div key={index} className="flex items-center py-3 border-b last:border-b-0">
                <FontAwesomeIcon icon={faCube} className="fa-lg mr-3 text-gray-400" />
                <div className="flex-1">
                  <div>
                    <a href="#" className="text-blue-400">{block.block_number}</a>
                  </div>
                  <div className="text-sm text-gray-500">{block.block_time?`${new Date(block.block_time).getMinutes()} min`: ''}</div>
                </div>
                <div className="flex-1 SPACE-x-2">
                  <a href="#" className="text-black">Miner</a>
                  <a href="#" className="text-blue-400 "> {block.asset_type}</a>
                  <div className="text-sm">
                    <span className="text-blue-400"> {block.block_time ? `${new Date(block.block_time).getSeconds()} secs` : ''}</span>
                    <span className="text-gray-500"> in {block.chain_id}</span>
                  </div>
                </div>
                <div className="text-xs font-semibold border border-gray-300 rounded px-3 py-1 bg-white">{(block.tx_value).slice(0,5)}Eth</div>
              </div>
            ))
          )}
        </div>
        <div className="overflow-hidden bg-gray-100 rounded-b-lg">
         <div className="bg-gray-100"></div>
          <a href="#" className="text-gray-600 font-medium flex items-center justify-center py-3">
            View All Blocks
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          </div>
        
      </div>
    </div>
  );
};

export default Blocks;