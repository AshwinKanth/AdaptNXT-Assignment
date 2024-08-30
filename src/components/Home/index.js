import React from 'react'; 
import Sidebar from '../Sidebar';
import LineChart from '../LineChart';

import PieChart from '../PieChart'

import "./index.css"

const Dashboard = () => (
    <div className='container'>
        <Sidebar />
        <LineChart />
        <PieChart />
    </div>
);

export default Dashboard;