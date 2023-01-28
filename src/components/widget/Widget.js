import React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

const Widget = () => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-4 p-4 drop-shadow-lg '>
                <div className='drop-shadow-2xl bg-slate-700 p-5'>
                    <div className='flex space-x-20 justify-center'>
                        <span>Users</span>
                        <span>
                            <span>
                                <ExpandLessIcon />
                            </span>
                            <span>20%</span>
                        </span>
                    </div>
                    {/* user number sec */}
                    <div className='my-6'>
                        <p className='ml-10'>20234</p>
                    </div>
                    {/* see all user and icon sec */}
                    <div className='flex space-x-32 justify-center'>
                        <span className='hover:underline text-white'>Users</span>
                        <span>
                            <span>
                                <PermIdentityIcon />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Widget;