import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Fetured = () => {
    return (
        <div>
            <div className='p-5 bg-slate-600 flex space-x-20 '>
                <span>
                    <h3>fetured</h3>
                </span>
                <span>
                    <MoreVertIcon />
                </span>
            </div>
        </div>
    );
};

export default Fetured;