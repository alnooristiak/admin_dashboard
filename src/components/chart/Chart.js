import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';

const Chart = () => {

    const data = [
        { name: "january", Total: 1234 },
        { name: "february", Total: 4567 },
        { name: "marce", Total: 7890 },
        { name: "april", Total: 1987 },
        { name: "may", Total: 7576 },
        { name: "june", Total: 1093 },
        { name: "july", Total: 8232 },
    ]

    return (
        <div>
            <p className='mb-10'>last 6 month (Revenue)</p>
            <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
            </AreaChart>
        </div>
    );
};

export default Chart;