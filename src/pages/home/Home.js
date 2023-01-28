import React from 'react';
import Chart from '../../components/chart/Chart';
import Fetured from '../../components/fetured/Fetured';
import NavBar from '../../components/navBar/NavBar';
import SideBar from '../../components/sideBar/SideBar';
import Tables from '../../components/table/Table';
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
                    <div className='grid
                     grid-cols-4 
                     gap-4 p-4 
                     drop-shadow-lg '>
                        <Widget type="user" />
                        <Widget type="oder" />
                        <Widget type="earning" />
                        <Widget type="balance" />
                    </div>
                    {/* fetured sec */}
                    <div className='grid grid-cols-12 gap-4'>
                        <div className="col-span-4">
                            <Fetured />
                        </div>
                        <div className="col-span-8 p-3">
                            <Chart />
                        </div>
                    </div>
                    {/* table sec */}
                    <div className='my-5'>
                        <Tables />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;