import React from 'react';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import './SiteBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div>
            <div className='_logo drop-shadow-xl bg-slate-500 p-2'>
                <Link to="/">
                    <h3 className='font-bold text-center'>logo</h3>
                </Link>
            </div>
            <div>
                {/* main sec */}
                <div className="_main">
                    <p className='font-semibold border-b-2 border-indigo-500'>lists</p>
                    <div className="_topnav p-2">
                        <DashboardCustomizeIcon />
                        <span className="pl-2 font-semibold">Dashboard</span>
                    </div>
                </div>
                {/* lists sec */}
                <div className="_lists">
                    <p className='font-semibold border-b-2 border-indigo-500'>lists</p>
                    <div className="_topnav p-2">
                        <Link to="/users">
                        <DashboardCustomizeIcon />
                        <span className="pl-2 font-semibold">User</span>
                        </Link>
                    </div>
                    <div className="_topnav p-2">
                        <Link to="/products">
                        <DashboardCustomizeIcon />
                        <span className="pl-2 font-semibold">Products</span>
                        </Link>
                    </div>
                    <div className="_topnav p-2">
                        <DashboardCustomizeIcon />
                        <span className="pl-2 font-semibold">Oders</span>
                    </div>
                    <div className="_topnav p-2">
                        <DashboardCustomizeIcon />
                        <span className="pl-2 font-semibold">Delevery</span>
                    </div>
                </div>
                {/* useful sec */}
                <div className="_useful">
                    <p className='font-semibold border-b-2 border-indigo-500'>useful</p>
                    <div className="_topnav p-2">
                        <DashboardCustomizeIcon />
                        <span className="pl-2 font-semibold">Stats</span>
                    </div>
                    <div className="_topnav p-2">
                        <DashboardCustomizeIcon />
                        <span className="pl-2 font-semibold">Nortifications</span>
                    </div>
                </div>
                {/* service sec */}
                <div className="_service">
                    <p className='font-semibold border-b-2 border-indigo-500'>service</p>
                    <div className="_topnav p-2">
                        <DashboardCustomizeIcon />
                        <span className="pl-2 font-semibold">System Helth</span>
                    </div>
                    <div className="_topnav p-2">
                        <DashboardCustomizeIcon />
                        <span className="pl-2 font-semibold">Logs</span>
                    </div>
                    <div className="_topnav p-2">
                        <DashboardCustomizeIcon />
                        <span className="pl-2 font-semibold">Settings</span>
                    </div>
                </div>
                {/* user sec */}
                <div className="_user">
                    <p className='font-semibold border-b-2 border-indigo-500'>user</p>
                    <div className="_topnav p-2">
                        <DashboardCustomizeIcon />
                        <span className="pl-2 font-semibold">Profile</span>
                    </div>
                    <div className="_topnav p-2">
                        <DashboardCustomizeIcon />
                        <span className="pl-2 font-semibold">Logout</span>
                    </div>
                </div>
                <div className="_topnav p-3 border">
                    <p className="text-center font-semibold border-b-2 border-indigo-500 p-2">
                        Collor Options
                    </p>
                    {/* color palate */}
                    <div className='flex justify-center'>
                        <div className="_color -light bg-white border border-indigo-500 w-[10]"></div>
                        <div className="_color -dark bg-slate-800"></div>
                    </div>
                </div>
            </div>
            <div>center</div>
        </div>
    );
};

export default SideBar;