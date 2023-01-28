import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import SideBar from '../../components/sideBar/SideBar';
import Widget from '../../components/widget/Widget';

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-12 gap-4'>
                {/* sid bar sec */}
                <div className="_sidebar col-span-2 p-4">
                    <SideBar />
                </div>
                {/* nav bar sec */}
                <div className="_mcompontnts col-span-10 p-3">
                    <NavBar />
                    <Widget />
                </div>
            </div>
        </div>
    );
};

export default Home;