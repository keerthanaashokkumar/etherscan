
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';

import { CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { ArrowTrendingDownIcon } from '@heroicons/react/24/outline';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import { BoltIcon } from '@heroicons/react/24/outline';
import { ClockIcon } from '@heroicons/react/24/outline';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import Blocks from './Blocks';
import Transactions from './Transactions';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const statsData = {
  etherPrice: { value: '$2,493.29', btc: '0.023996 BTC', change: '-1.09%' },
  transactions: { value: '2,829.78 M', tps: '15.6 TPS' },
  medGasPrice: { value: '3.746 Gwei', usd: '$0.20' },
  marketCap: { value: '$300,999,184,644.00' },
  lastFinalizedBlock: { value: '22609269' },
  lastSafeBlock: { value: '22609301' },
};

const chartData = {
  labels: [
    'May 24',  'May 30', 'June 3',
  ],
  datasets: [
    {
      label: 'Transactions',
      data: [
        1350000, 1600000, 1550000,1400000
      ],
      borderColor: '#4f8cff',
      backgroundColor: 'rgba(11, 12, 12, 0.1)',
      tension: 0.3,
      pointRadius: 0,
      fill: true,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        callback: function (value) {
          return value >= 1000000 ? value / 1000000 + 'k' : value;
        },
        color: '#000000',
      },
      grid: { display: false },
    },
    x: {
      ticks: { color: '#000000' },
      grid: { display: false },
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.parsed.y.toLocaleString()} txns`;
        },
      },
    },
  },
};

const Stats = () => (
  <>
  <div className="container mx-auto  px-4 pt-6 mt-4 ">
    <div className="bg-white dark:bg-[#151b2b] text-gray-900 dark:text-white mt-6 p-6 rounded-2xl shadow-2xl border border-gray-200 dark:border-[#232b45]">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
  <div className="flex flex-col justify-between border-b  md:border-b-0 md:border-r border-gray-200 dark:border-[#232b45] p-0 md:pr-6">
 <div className="mb-4 md:mb-6">
    <div className="flex items-center mb-2">
      <CurrencyDollarIcon className="w-5 h-5 mr-2 text-gray-400 dark:text-[#b0b8d1]" />
      <span className="text-xs text-gray-500 dark:text-[#b0b8d1] font-semibold">ETHER PRICE</span>
    </div>
    <div className="text-sm font-semibold">
      {statsData.etherPrice.value}
      <span className="text-sm text-gray-500 dark:text-[#b0b8d1] font-normal ml-2">
        @ {statsData.etherPrice.btc}
        <span className="ml-1 text-red-400 flex items-center inline-flex">
          <ArrowTrendingDownIcon className="w-4 h-4 inline mr-1" />
          ({statsData.etherPrice.change})
        </span>
      </span>
    </div>
  </div>
  <div className="border-t border-gray-200 dark:border-[#232b45] my-4 md:my-4 ">
    <div className="flex items-center mb-2 ">
      <GlobeAltIcon className="w-5 h-5 mr-2 text-gray-400 dark:text-[#b0b8d1]" />
      <span className="text-xs text-gray-500 dark:text-[#b0b8d1] font-semibold">MARKET CAP</span>
    </div>
    <div className="text-sm font-bold">{statsData.marketCap.value}</div>
  </div>
</div>
        <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-200 dark:border-[#232b45] px-6">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center mb-2">
                <DocumentDuplicateIcon className="w-5 h-5 mr-2 text-gray-400 dark:text-[#b0b8d1]" />
                <span className="text-xs text-gray-500 dark:text-[#b0b8d1] font-semibold">TRANSACTIONS</span>
              </div>
              <div className="text-sm font-bold">
                {statsData.transactions.value}
                <span className="text-sm text-gray-500 dark:text-[#b0b8d1] ml-2">({statsData.transactions.tps})</span>
              </div>
            </div>
        
            <div className="text-right">
              <div className="flex items-center justify-end mb-2">
                <BoltIcon className="w-5 h-5 mr-2 text-gray-400 dark:text-[#b0b8d1]" />
                <span className="text-xs text-gray-500 dark:text-[#b0b8d1] font-semibold">MED GAS PRICE</span>
              </div>
              <div className="text-sm font-bold">
                {statsData.medGasPrice.value}
                <span className="text-base font-semibold"> Gwei</span>
                <span className="text-sm text-gray-500 dark:text-[#b0b8d1] ml-2">({statsData.medGasPrice.usd})</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-[#232b45] my-4"></div>
          <div className="flex justify-between">
            <div>
              <div className="flex items-center mb-2">
                <ClockIcon className="w-5 h-5 mr-2 text-gray-400 dark:text-[#b0b8d1]" />
                <span className="text-xs text-gray-500 dark:text-[#b0b8d1] font-semibold">LAST FINALIZED BLOCK</span>
              </div>
              <div className="text-sm font-bold">{statsData.lastFinalizedBlock.value}</div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end mb-2">
                <ShieldCheckIcon className="w-5 h-5 mr-2 text-gray-400 dark:text-[#b0b8d1]" />
                <span className="text-xs text-gray-500 dark:text-[#b0b8d1] font-semibold">LAST SAFE BLOCK</span>
              </div>
              <div className="text-sm font-bold">{statsData.lastSafeBlock.value}</div>
            </div>
          </div>
        </div>
        <div className="pl-6 flex flex-col justify-between">
          <h3 className="text-gray-500 dark:text-[#b0b8d1] text-xs mb-2 font-semibold">TRANSACTION HISTORY IN 14 DAYS</h3>
          <div className="h-32 md:h-40">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
    
  </div>
  {/* <div className="container mx-auto px-4  grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200">
        <Blocks />
      </div>
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200">
        <Transactions />
      </div>
    </div>
    </> */}
    <div className="w-full bg-gray grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 px-0">
  <div className="bg-white rounded-lg shadow-2xl border border-gray-200">
    <Blocks />
  </div>
  <div className="bg-white rounded-lg shadow-2xl border border-gray-200">
    <Transactions />
  </div>
</div>
</>
);

export default Stats;