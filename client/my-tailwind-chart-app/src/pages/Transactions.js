import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Transactions = () => {
  const [transactionsData, setTransactionsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/transactions`,
          {
            headers: {
              'x-api-key': process.env.REACT_APP_SIM_API_KEY,
            },
          }
        );
        const data = await res.json();
        setTransactionsData(Array.isArray(data) ? data : data.transactions || []);
      } catch (error) {
        setTransactionsData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, [])

  function formatAddress(addr) {
  if (!addr) return '';
  return addr.length > 12
    ? `${addr.slice(0, 8)}...${addr.slice(-8)}`
    : addr
}

function formatValue(val) {
  if (!val) return '0 Eth';
  let num = val.toString().replace(/[^0-9.]/g, '');
  num = num.slice(0, 5);
  return `${num} Eth`;
}

  return (
 <div className="bg-white shadow rounded-lg">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base font-semibold text-black">Latest Transactions</h2>
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
            transactionsData.slice(0, 6).map((tx, index) => (
              <div key={tx.tx_hash || tx.hash || index} className="flex items-center py-3 border-b last:border-b-0">
                <FontAwesomeIcon icon={faFileAlt} className="fa-lg mr-3 text-gray-400" />
                <div className="flex-1">
                  <div>
                    <a href="#" className="text-blue-400">{tx.address ? `${tx.address.slice(0, 8)}...${tx.address.slice(-8)}` : ''}</a>
                  </div>
                  <div className="text-sm text-gray-500">
                    {tx.block_time ? `${new Date(tx.block_time).getSeconds()} secs ago` : ''}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-700">
                    From <a href="#" className="text-blue-400 font-small hover:underline">{formatAddress(tx.tx_from || tx.from)}</a>
                  </div>
                  <div className="text-sm">
                    To <a href="#" className="text-blue-400 font-medium hover:underline">{formatAddress(tx.tx_to || tx.to)}</a>
                  </div>
                </div>
                <div className="text-xs font-semibold border border-gray-300 rounded px-3 py-1 bg-white text-right block min-w-[80px]">
                  {formatValue(tx.tx_value || tx.value)}
                </div>
              </div>
            ))
          )}
        </div>
        <div className="overflow-hidden bg-gray-100 rounded-b-lg">
          <div className="bg-gray-100"></div>
          <a href="#" className="text-gray-600 font-medium flex items-center justify-center py-3">
            View All Transactions
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Transactions;