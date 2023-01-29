import React from 'react';
import Chart from '../../components/chart/Chart';
import NavBar from '../../components/navBar/NavBar';
import SideBar from '../../components/sideBar/SideBar';
import Tables from '../../components/table/Table';

const Single = () => {
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className="_sidebar col-span-2 p-4">
                <SideBar />
            </div>
            <div className="_sidebar col-span-10 p-4">
                <NavBar />
                <div className='grid grid-cols-12 gap-4'>
                    {/* information section */}
                    <div className="col-span-3 border border-indigo-400 p-2 mt-2">
                        <div className='flex space-x-5'>
                            <h3>Information</h3>
                            <p className='bg-indigo-500 p-1 px-4 rounded-md'>Edit</p>
                        </div>
                        <div className='flex pt-3'>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTadiAkyqUYNIZACGiJmjavq2jzl4bL0EJTQ&usqp=CAU"
                                className='w-16 h-16 mr-3 rounded-full'
                                alt="" />
                            <div>
                                <p className='align-center mt-3'>Details</p>
                                <div>
                                    <p>Name: enter name</p>
                                    <p>Email: enter email</p>
                                    <p>Address: enter adderss</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second sec */}
                    <div className="col-span-9  
                    p-2 mt-2 justify-center flex">
                        <Chart />
                    </div>
                </div>
                {/* tables sec components */}
                <div className='p-3 mt-4 justify-center '>
                    <Tables />
                </div>
            </div>
        </div>
    );
};

export default Single;