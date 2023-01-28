import React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widget = ({ type }) => {

    let data;

    // temporary 
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "this is a user",
                isMoney: false,
                link: "see all users",
                icon: <PermIdentityIcon />,
            };
            break;
        case "oder":
            data = {
                title: "this is a oder",
                isMoney: false,
                link: "see all oder",
                icon: <ShoppingCartIcon />,
            };
            break;
        case "earning":
            data = {
                title: "this is a earning",
                isMoney: true,
                link: "see all earning",
                icon: <MonetizationOnIcon />,
            };
            break;
        case "balance":
            data = {
                title: "this is a balance",
                isMoney: true,
                link: "see all balance",
                icon: <AccountBalanceWalletIcon />,
            };
            break;
        default:
            break;
    }
    return (
        <>
            <div>
                <div className='drop-shadow-2xl bg-slate-700 p-5 rounded-lg'>
                    <div className='flex space-x-20 justify-center'>
                        <span>{data.title}</span>
                        <span>
                            <span>
                                <ExpandLessIcon />
                            </span>
                            <span>{diff}%</span>
                        </span>
                    </div>
                    {/* user number sec */}
                    <div className='my-6'>
                        <p className='ml-10'>
                            {data.isMoney && "$"} {amount}
                        </p>
                    </div>
                    {/* see all user and icon sec */}
                    <div className='flex space-x-24 justify-center'>
                        <span className='hover:underline text-white'>{data.link}</span>
                        <span>
                            <div className='bg-white w-6 h-6 hover:bg-indigo-500 justify-center items-center'>
                                <span className=''>{data.icon}</span>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Widget;