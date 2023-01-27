import React from 'react';
import SideBar from '../../components/sideBar/SideBar';

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-12 gap-4'>
                <div className="_sidebar col-span-2 p-3">
                    <SideBar />
                </div>
                <div className="_mcompontnts col-span-10 p-3">
                    <p>main compontnts</p>
                </div>
            </div>
        </div>
    );
};

export default Home;