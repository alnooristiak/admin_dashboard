import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import './NavBar.css';

const user_img = '../../assets/img/istiak.png';

const NavBar = () => {
    return (
        <div>
            <div className='flex p-2 border-b-2 border-indigo-400'>
                {/* searc bar comp  */}
                <div className="flex">
                    <div className="mb-3">
                        <div className="input-group relative flex flex-wrap items-stretch">
                            <input type="search" className="form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
                            <button className="btn inline-block px-2 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                        </div>
                    </div>
                    {/* icon section */}
                    <div className="_iconsec flex">
                        <div className='mx-2'>
                            <LanguageIcon />
                            Language
                        </div>
                        <div>
                            <DarkModeIcon className='mx-2' />
                            <ModeCommentIcon className='mx-2' />
                            <span>
                                <span>
                                    <NotificationsActiveIcon className='mx-2' />
                                    <span className='nortification_counter'>1</span>
                                </span>
                                <span>
                                    <ViewSidebarIcon className='mx-2' />
                                    <span className='nortification_counter'>1</span>
                                </span>
                            </span>
                            <AutoAwesomeIcon className='mx-2' />
                        </div>
                    </div>
                    {/* user mage sec */}
                    <div>
                        <img src={user_img} alt="" srcset="" className='user_icon' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;