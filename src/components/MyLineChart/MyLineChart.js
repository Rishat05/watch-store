import React from 'react';
import './MyLineChart.css';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    return (
        <div className='dashboard-container'>
            <div className="chart">
                <h3>MONTH WISE SELL</h3>
                <ResponsiveContainer width='95%' height={400}>
                    <LineChart data={data}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>

            </div>

            <div className="chart">
                <h3>Investment VS Revenue</h3>
                <ResponsiveContainer width='95%' height={400}>
                    <AreaChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>
                </ResponsiveContainer>

            </div>

            <div className="chart">
                <h3>Investment VS Revenue</h3>
                <ResponsiveContainer width='95%' height={400}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

            </div>

            <div className="chart">
                <h3>Investment VS Revenue</h3>
                <ResponsiveContainer width='95%' height={400} >
                    <PieChart >
                        <Tooltip />
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={40} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={50} outerRadius={70} fill="#82ca9d" label />
                    </PieChart>
                </ResponsiveContainer>

            </div>

        </div>
    );
};

export default MyLineChart;