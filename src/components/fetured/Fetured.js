import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import TargetValue from '../targetvalue/TargetValue';

const Fetured = () => {
    return (
        <div>
            <div className='p-5 bg-slate-600 flex space-x-20 '>
                <span>
                    <h3>Total Revinue</h3>
                </span>
                <span>
                    <MoreVertIcon />
                </span>
            </div>
            <div className='p-10 w-80 justify-center align-center'>
                <CircularProgressbar 
                value={75} 
                text="75%" 
                strokeWidth={3} />
            </div>
            <div className='text-center justify-center'>
                <p className='p-2'>total sels made today</p>
                <h3 className='p-2 font-bold text-2xl'>$420</h3>
                <p className='p-2'>privius transition may not</p>
                <p className='p-2'>be include</p>
                <div className='flex space-x-20'>
                    <div>
                        <TargetValue />
                    </div>
                    <div>
                        <TargetValue />
                    </div>
                    <div>
                        <TargetValue />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fetured;