import React from 'react';
import DataTable from '../../components/datatable/DataTable';
import NavBar from '../../components/navBar/NavBar';
import SideBar from '../../components/sideBar/SideBar';

const List = () => {
    return (
        <div className='grid grid-cols-12 gap-4'>
            <div className="_sidebar col-span-2 p-4">
                <SideBar />
            </div>
            <div className="_sidebar col-span-10 p-4">
                <NavBar />
                <div className='p-5'>
                    <DataTable />
                </div>
            </div>
        </div>
    );
};

export default List;
